import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { linksAPI } from '../services/api';

const Dashboard = () => {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    originalUrl: '',
    description: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [editingLink, setEditingLink] = useState(null);
  const { user, logout } = useAuth();

  useEffect(() => {
    fetchLinks();
  }, []);

  const fetchLinks = async () => {
    try {
      const response = await linksAPI.getLinks();
      setLinks(response.data.links);
    } catch (error) {
      console.error('Error fetching links:', error);
      setError('Failed to load links');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      if (editingLink) {
        const response = await linksAPI.updateLink(editingLink.id, formData);
        setLinks(links.map(link => 
          link.id === editingLink.id ? response.data.link : link
        ));
        setSuccess('Link updated successfully!');
        setEditingLink(null);
      } else {
        const response = await linksAPI.createLink(formData);
        setLinks([response.data.link, ...links]);
        setSuccess('Link created successfully!');
      }
      
      setFormData({ name: '', originalUrl: '', description: '' });
      setShowForm(false);
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to save link');
    }
  };

  const handleEdit = (link) => {
    setEditingLink(link);
    setFormData({
      name: link.name,
      originalUrl: link.originalUrl,
      description: link.description || ''
    });
    setShowForm(true);
  };

  const handleDelete = async (linkId) => {
    if (window.confirm('Are you sure you want to delete this link?')) {
      try {
        await linksAPI.deleteLink(linkId);
        setLinks(links.filter(link => link.id !== linkId));
        setSuccess('Link deleted successfully!');
      } catch (error) {
        setError('Failed to delete link');
      }
    }
  };

  const handleCancelEdit = () => {
    setEditingLink(null);
    setFormData({ name: '', originalUrl: '', description: '' });
    setShowForm(false);
    setError('');
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setSuccess('Short URL copied to clipboard!');
    setTimeout(() => setSuccess(''), 3000);
  };

  if (loading) {
    return (
      <div style={styles.container}>
        <div style={styles.loading}>Loading...</div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Link Shortener Dashboard</h1>
        <div style={styles.userInfo}>
          <span>Welcome, {user?.username}!</span>
          <button onClick={logout} style={styles.logoutButton}>
            Logout
          </button>
        </div>
      </header>

      {error && <div style={styles.error}>{error}</div>}
      {success && <div style={styles.success}>{success}</div>}

      <div style={styles.actions}>
        <button
          onClick={() => setShowForm(!showForm)}
          style={styles.addButton}
        >
          {showForm ? 'Cancel' : 'Add New Link'}
        </button>
      </div>

      {showForm && (
        <div style={styles.formContainer}>
          <h3>{editingLink ? 'Edit Link' : 'Add New Link'}</h3>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Link Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={styles.input}
                placeholder="e.g., My Website"
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Original URL:</label>
              <input
                type="url"
                name="originalUrl"
                value={formData.originalUrl}
                onChange={handleChange}
                required
                style={styles.input}
                placeholder="https://example.com"
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Description (optional):</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                style={styles.textarea}
                placeholder="Brief description of the link"
              />
            </div>

            <div style={styles.formButtons}>
              <button type="submit" style={styles.saveButton}>
                {editingLink ? 'Update Link' : 'Create Link'}
              </button>
              {editingLink && (
                <button 
                  type="button" 
                  onClick={handleCancelEdit}
                  style={styles.cancelButton}
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>
      )}

      <div style={styles.linksContainer}>
        <h2>Your Links ({links.length})</h2>
        {links.length === 0 ? (
          <div style={styles.emptyState}>
            <p>No links created yet. Click "Add New Link" to get started!</p>
          </div>
        ) : (
          <div style={styles.linksList}>
            {links.map((link) => (
              <div key={link.id} style={styles.linkCard}>
                <div style={styles.linkInfo}>
                  <h3 style={styles.linkName}>{link.name}</h3>
                  <div style={styles.urls}>
                    <div style={styles.urlRow}>
                      <strong>Short URL:</strong>
                      <div style={styles.urlContainer}>
                        <a 
                          href={link.shortUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={styles.shortUrl}
                        >
                          {link.shortUrl}
                        </a>
                        <button
                          onClick={() => copyToClipboard(link.shortUrl)}
                          style={styles.copyButton}
                        >
                          Copy
                        </button>
                      </div>
                    </div>
                    <div style={styles.urlRow}>
                      <strong>Original URL:</strong>
                      <a 
                        href={link.originalUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={styles.originalUrl}
                      >
                        {link.originalUrl}
                      </a>
                    </div>
                  </div>
                  {link.description && (
                    <p style={styles.description}>{link.description}</p>
                  )}
                  <div style={styles.stats}>
                    <span>Clicks: {link.clicks}</span>
                    <span>Created: {new Date(link.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
                <div style={styles.linkActions}>
                  <button
                    onClick={() => handleEdit(link)}
                    style={styles.editButton}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(link.id)}
                    style={styles.deleteButton}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    minHeight: '100vh',
    backgroundColor: '#f8f9fa'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  title: {
    color: '#333',
    margin: 0
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
  },
  logoutButton: {
    padding: '8px 16px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  loading: {
    textAlign: 'center',
    padding: '50px',
    fontSize: '18px'
  },
  error: {
    backgroundColor: '#f8d7da',
    color: '#721c24',
    padding: '10px',
    borderRadius: '4px',
    marginBottom: '20px',
    border: '1px solid #f5c6cb'
  },
  success: {
    backgroundColor: '#d4edda',
    color: '#155724',
    padding: '10px',
    borderRadius: '4px',
    marginBottom: '20px',
    border: '1px solid #c3e6cb'
  },
  actions: {
    marginBottom: '30px'
  },
  addButton: {
    padding: '12px 24px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px'
  },
  formContainer: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '8px',
    marginBottom: '30px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  formGroup: {
    marginBottom: '20px'
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#555'
  },
  input: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px',
    boxSizing: 'border-box'
  },
  textarea: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px',
    boxSizing: 'border-box',
    minHeight: '80px',
    resize: 'vertical'
  },
  formButtons: {
    display: 'flex',
    gap: '10px'
  },
  saveButton: {
    padding: '12px 24px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  cancelButton: {
    padding: '12px 24px',
    backgroundColor: '#6c757d',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  linksContainer: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  emptyState: {
    textAlign: 'center',
    padding: '50px',
    color: '#666'
  },
  linksList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  linkCard: {
    border: '1px solid #e9ecef',
    borderRadius: '8px',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  linkInfo: {
    flex: 1
  },
  linkName: {
    margin: '0 0 15px 0',
    color: '#333'
  },
  urls: {
    marginBottom: '15px'
  },
  urlRow: {
    marginBottom: '10px'
  },
  urlContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginTop: '5px'
  },
  shortUrl: {
    color: '#007bff',
    textDecoration: 'none',
    fontFamily: 'monospace',
    fontSize: '14px'
  },
  originalUrl: {
    color: '#6c757d',
    textDecoration: 'none',
    fontSize: '14px',
    wordBreak: 'break-all'
  },
  copyButton: {
    padding: '4px 8px',
    backgroundColor: '#f8f9fa',
    border: '1px solid #dee2e6',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '12px'
  },
  description: {
    color: '#666',
    margin: '10px 0',
    fontStyle: 'italic'
  },
  stats: {
    display: 'flex',
    gap: '20px',
    fontSize: '14px',
    color: '#666'
  },
  linkActions: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  editButton: {
    padding: '8px 16px',
    backgroundColor: '#ffc107',
    color: '#212529',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  deleteButton: {
    padding: '8px 16px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default Dashboard;

export const API_BASE = typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
  ? 'http://localhost:3000'
  : 'https://dhara-divineawardsadmin.vercel.app';

/**
 * Helper to submit form data to the backend.
 * Automatically backs up to localStorage.
 * 
 * @param {string} module - The name of the module/form
 * @param {object} data - Form field values
 */
export async function submitForm(module, data) {
  const payload = {
    module,
    ...data,
    timestamp: new Date().toISOString()
  };

  // Back up locally
  try {
    const current = JSON.parse(localStorage.getItem('dhara_submissions') || '[]');
    current.push(payload);
    localStorage.setItem('dhara_submissions', JSON.stringify(current));
  } catch (err) {
    console.error('Failed to save to localStorage:', err);
  }

  // POST to API
  try {
    const res = await fetch(`${API_BASE}/api/submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    
    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }
    
    return await res.json();
  } catch (err) {
    console.error('Failed to submit form to server, using local fallback:', err);
    return { success: true, localOnly: true };
  }
}

/**
 * Fetches gallery images from the backend.
 */
export async function fetchGallery() {
  try {
    const res = await fetch(`${API_BASE}/api/gallery`);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error('Failed to fetch gallery, using local static data:', err);
    return null;
  }
}

/**
 * Fetches events/activities from the backend.
 */
export async function fetchEvents() {
  try {
    const res = await fetch(`${API_BASE}/api/events`);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error('Failed to fetch events, using local static data:', err);
    return null;
  }
}

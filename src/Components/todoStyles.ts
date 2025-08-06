
import { CSSProperties } from 'react'

const todoStyles = {
  container: {
    minHeight: '100vh',
    padding: '2rem',
  } as CSSProperties,

  heading: {
    textAlign: 'center' ,
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
  } as CSSProperties,

  inputsection: {
    display: 'flex',
    gap: '1rem',
    maxWidth: '600px',
    margin: '0 auto 2rem auto',
  } as CSSProperties,

  input: {
    flex: 1,
    padding: '0.5rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
  } as CSSProperties,

  button: {
    padding: '0.5rem 1rem',
    backgroundColor: '#2563eb',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  } as CSSProperties,

  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1.5rem',
  } as CSSProperties,

  section: {
    maxWidth: '100%',
  } as CSSProperties,

  sectionTitle: {
    fontSize: '1.25rem',
    fontWeight: 600,
    marginBottom: '0.5rem',
  } as CSSProperties,

  table: {
    width: '100%',
    background: 'white',
    borderRadius: '6px',
    boxShadow: '0 0 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'left' ,
    borderCollapse: 'collapse',
  } as CSSProperties,

  thead: {
    backgroundColor: '#e5e7eb',
  } as CSSProperties,

  thtd: {
    padding: '0.75rem 1rem',
    borderTop: '1px solid #e5e7eb',
  } as CSSProperties,

  todotext: {
    color: '#6b7280',
    textDecoration: 'line-through',
  } as CSSProperties,

  actions: {
    display: 'flex',
    gap: '0.5rem',
  } as CSSProperties,

  editbtn: {
    padding: '0.25rem 0.75rem',
    backgroundColor: '#f59e0b',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  } as CSSProperties,

  savebtn: {
    padding: '0.25rem 0.75rem',
    backgroundColor: '#10b981',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  } as CSSProperties,

  completebtn: {
    padding: '0.25rem 0.75rem',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  } as CSSProperties,

  deletebtn: {
    padding: '0.25rem 0.75rem',
    backgroundColor: '#ef4444',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  } as CSSProperties,

  notodos: {
    textAlign: 'center' ,
    padding: '1rem',
    color: '#6b7280',
  } as CSSProperties,
}

export default todoStyles

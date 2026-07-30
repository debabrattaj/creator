const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function Icon({ name, className = 'w-6 h-6' }) {
  const props = { className, viewBox: '0 0 24 24', ...base }
  switch (name) {
    case 'crm':
      return (
        <svg {...props}>
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M3 9h18" />
          <path d="M8 14h3" />
          <circle cx="16" cy="14" r="1.4" />
        </svg>
      )
    case 'books':
      return (
        <svg {...props}>
          <path d="M4 5.5C4 4.7 4.7 4 5.5 4H12v16H5.5A1.5 1.5 0 0 1 4 18.5z" />
          <path d="M20 5.5c0-.8-.7-1.5-1.5-1.5H12v16h6.5a1.5 1.5 0 0 0 1.5-1.5z" />
        </svg>
      )
    case 'people':
      return (
        <svg {...props}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
          <circle cx="17.5" cy="8.5" r="2.3" />
          <path d="M21 20c0-2.6-1.7-4.8-4-5.6" />
        </svg>
      )
    case 'one':
      return (
        <svg {...props}>
          <rect x="3" y="3" width="7" height="7" rx="1.4" />
          <rect x="14" y="3" width="7" height="7" rx="1.4" />
          <rect x="3" y="14" width="7" height="7" rx="1.4" />
          <rect x="14" y="14" width="7" height="7" rx="1.4" />
        </svg>
      )
    case 'code':
      return (
        <svg {...props}>
          <path d="M8 6 3 12l5 6" />
          <path d="M16 6l5 6-5 6" />
          <path d="M13.5 4.5l-3 15" />
        </svg>
      )
    case 'migrate':
      return (
        <svg {...props}>
          <path d="M3 12h13" />
          <path d="M12 5l7 7-7 7" />
          <path d="M3 5v14" strokeDasharray="2 3" />
        </svg>
      )
    case 'integrate':
      return (
        <svg {...props}>
          <circle cx="6" cy="6" r="3" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="12" cy="18" r="3" />
          <path d="M8.5 7.5L10.5 15.5" />
          <path d="M15.5 7.5L13.5 15.5" />
          <path d="M9 6h6" />
        </svg>
      )
    case 'support':
      return (
        <svg {...props}>
          <path d="M4 13a8 8 0 0 1 16 0" />
          <rect x="2.5" y="13" width="4" height="6" rx="1.4" />
          <rect x="17.5" y="13" width="4" height="6" rx="1.4" />
          <path d="M20 19a4 4 0 0 1-4 3h-2" />
        </svg>
      )
    case 'badge':
      return (
        <svg {...props}>
          <circle cx="12" cy="9" r="6" />
          <path d="M8.5 14 7 21l5-2.5L17 21l-1.5-7" />
        </svg>
      )
    case 'bolt':
      return (
        <svg {...props}>
          <path d="M13 2 4 14h6l-1 8 9-12h-6z" />
        </svg>
      )
    case 'shield':
      return (
        <svg {...props}>
          <path d="M12 3l7 3v6c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
    case 'eye':
      return (
        <svg {...props}>
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    case 'headset':
      return (
        <svg {...props}>
          <path d="M4 13a8 8 0 0 1 16 0v4a3 3 0 0 1-3 3h-1" />
          <rect x="2.5" y="13" width="4" height="6" rx="1.4" />
          <rect x="17.5" y="13" width="4" height="6" rx="1.4" />
        </svg>
      )
    case 'scale':
      return (
        <svg {...props}>
          <path d="M3 20h18" />
          <path d="M12 4v16" />
          <path d="M5 8l3.5-4L12 8" />
          <path d="M12 8l3.5-4L19 8" />
          <path d="M3 8h5M16 8h5" />
        </svg>
      )
    case 'whatsapp':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.4 0-.5s-.6-1.5-.8-2c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s1 2.6 1.1 2.7c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.3z" />
          <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.4 5.1L2 22l5.1-1.3C8.5 21.5 10.2 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3C4 14.9 3.6 13.5 3.6 12c0-4.6 3.8-8.4 8.4-8.4s8.4 3.8 8.4 8.4-3.8 8.2-8.4 8.2z" />
        </svg>
      )
    case 'phone':
      return (
        <svg {...props}>
          <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2C9 21 3 15 3 6a2 2 0 0 1 1-2z" />
        </svg>
      )
    case 'mail':
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      )
    case 'map-pin':
      return (
        <svg {...props}>
          <path d="M12 21s7-6.6 7-11.5A7 7 0 0 0 5 9.5C5 14.4 12 21 12 21z" />
          <circle cx="12" cy="9.5" r="2.3" />
        </svg>
      )
    case 'menu':
      return (
        <svg {...props}>
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      )
    case 'close':
      return (
        <svg {...props}>
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      )
    case 'check':
      return (
        <svg {...props}>
          <path d="M5 12.5l4.5 4.5L19 7" />
        </svg>
      )
    case 'star':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M12 2.5l2.9 6 6.6.7-4.9 4.6 1.3 6.6L12 17l-5.9 3.4 1.3-6.6-4.9-4.6 6.6-.7z" />
        </svg>
      )
    case 'chevron-down':
      return (
        <svg {...props}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      )
    case 'arrow-right':
      return (
        <svg {...props}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      )
    case 'clock':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3.5 2" />
        </svg>
      )
    case 'quote':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M9 7c-2.8 0-5 2.2-5 5v6h6v-6H7.2C7.5 10.8 8.6 9.8 10 9.5V7C9.7 7 9.3 7 9 7zm10 0c-2.8 0-5 2.2-5 5v6h6v-6h-2.8c.3-1.2 1.4-2.2 2.8-2.5V7z" />
        </svg>
      )
    default:
      return null
  }
}

export function setActive (pathname, actualPath) {
    return pathname === actualPath ? 'font-bold' : ''
  }
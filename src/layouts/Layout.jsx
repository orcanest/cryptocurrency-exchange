import styles from './Layout.module.css'

function Layout({children}) {
  return (
    <>
      <header className={styles.header}>
        <h1>Cryptocurrency Exchange</h1>
        <p>
            <a href="https://orco.com">ORCO</a>
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>
           Developed by Saeid 🧑🏻‍💻 
        </p>
      </footer>
    </>
  )
}

export default Layout

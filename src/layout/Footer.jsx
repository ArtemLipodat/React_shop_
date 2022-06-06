function Footer() {
    const date = new Date()
    return(
        <footer className="footer">
            <div className="footer-copy">{date.getFullYear()} &copy; Вкус и Цвет</div>
            <div className="footer-icons">
                <a href="/"><img src="./img/whatsapp.png" alt=""/></a>
                <a href="/"><img src="./img/instagram.png" alt=""/></a>
                <a href="/"><img src="./img/vk.png" alt=""/></a>
            </div>
            <div className="footer-company">
                <img src="./img/lipodat.png" alt=""/>
            </div>
        </footer>
    )
}

export default Footer;
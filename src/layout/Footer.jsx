function Footer() {
    const date = new Date()
    return(
        <footer className="footer">
            <div className="footer-copy">{date.getFullYear()} &copy; Вкус и Цвет</div>
            <div className="footer-icons">
                <a target='_blank' href="https://api.whatsapp.com/send?phone=79501573115&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C!"><img src="./img/whatsapp.png" alt=""/></a>
                <a target="_blank" href="https://instagram.com/vkus_i_zvet?igshid=YmMyMTA2M2Y="><img src="./img/instagram.png" alt=""/></a>
                <a target="_blank" href="https://vk.com/club209663538"><img src="./img/vk.png" alt=""/></a>
            </div>
            <div className="footer-company">
                <img src="./img/lipodat.png" alt=""/>
            </div>
        </footer>
    )
}

export default Footer;
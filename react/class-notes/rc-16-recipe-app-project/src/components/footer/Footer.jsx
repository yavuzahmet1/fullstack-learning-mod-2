import "./Footer.css";
import designSvg from "../../assets/design.svg";

const Footer = () => {
  return (
    <div className="footer-div">
      <a
        href="https://github.com/AshleyMiller79"
        target="_blank"
        rel="noopener noreferrer"
        // Noreferrer etiketi önceleri noopener etiketiyle beraber kullanılan, target=”_blank” etiketinden gelebilecek tehditlere karşı sitenizi ve bilgisayarınızı korumak için noopener etiketiyle birlikte komut oluşturan etikettir. Güvenlik açıklarını kapatabilmek ve SEO çalışmalarına da katkıda bulunmak için noopenerle birlikte yazılan noreferrer, WordPress’in güvenliği iyileştirmeye yönelik yeni güncellemeleriyle kaldırıldı ve noopener etiketi tek başına kullanılmaya başlandı.
        // Noopener, web sitenizin güvenliğini artırmak ve diğer web sitelerinin sayfanıza erişim sağlamasını önlemek için gereklidir (tarayıcı oturumu aracılığıyla).
        // Noreferrer, yönlendirme bilgilerinin hedef web sitesine aktarılmasını önlemek için kullanılır ve bu aynı zamanda Google analitikteki yönlendirme trafiğini de gizler.
        style={{ textDecoration: "none" }}
      >
        <code className="brand">{"<Ashley/> "}</code>
        {/* <></> işaretleriyle kod formatında yazabilmek  için code */}
      </a>
      <img
        src={designSvg}
        alt="design"
        style={{ width: "40px", margin: "0  25px 0 10px" }}
      />
      <span>Copyright {new Date().getFullYear()}</span>
    </div>
  );
};

export default Footer;

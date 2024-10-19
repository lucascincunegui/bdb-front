export default function SocialLink({ className, alt, src }) {
  function goTo() {
    window.open(`https://www.${className}.com/bulichu.dosbichos.7`);
  }

  return (
    <div className="social-media" onClick={goTo}>
      <div className={className}>
        <img className="img" src={src} alt={alt} />
        <div className="text-div">
          <h1 className="text">Conheça nossa pagina!</h1>
        </div>
      </div>
    </div>
  );
}

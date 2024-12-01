export const backgroundImageStyles = (src: string) => ({
  backgroundImage: `linear-gradient(0deg, #000000e6, #11111100), url(${src})`,
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundSize: "cover",
});

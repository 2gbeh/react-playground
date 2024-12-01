type BackgroundAttachment = "scroll" | "fixed";

type BackgroundSize = "cover" | "contain";

export const backgroundImageStyles = (
  src: string,
  backgroundAttachment: BackgroundAttachment = "scroll",
  backgroundSize: BackgroundSize = "cover",
) => ({
  backgroundImage: `linear-gradient(0deg, #000000f2, #11111100), url(${src})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundAttachment,
  backgroundSize,
});

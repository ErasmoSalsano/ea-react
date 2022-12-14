import { Button } from "./Button";

export function HomePageUpperHero({
  mobile,
  tablet768,
  tablet1024,
  desktop,
  spanText,
  logoSvg,
  buttonSpan,
  buttonColor,
  buttonPosition,
  content,
  buttonLink,
}) {
  return (
    <div className="hero_wrap">
      <div className={"second-hero_wrap " + content}>
        <picture className="background-picture">
          <source media="(max-width: 766px)" srcSet={mobile} />
          <source media="(max-width: 1023px)" srcSet={tablet768} />
          <source media="(max-width: 1455px)" srcSet={tablet1024} />
          <source media="(min-width: 1456px)" srcSet={desktop} />
          <img className="upper-hero_image" src={mobile} alt="hero_image" />
        </picture>

        <div className={"upper-hero " + content}>
          <div className={"upper-hero_content main-wrap " + content}>
            <img className="upper-hero_logo" src={logoSvg} alt="ea play logo" />
            <span className={content}>{spanText} </span>
            <Button
              buttonLink={buttonLink}
              buttonText={buttonSpan}
              color={
                buttonColor ? buttonColor : "white"
              } /*justifyContent={buttonPosition}*/
            />
          </div>
        </div>
      </div>
    </div>
  );
}

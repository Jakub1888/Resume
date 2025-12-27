type Image = {
  src: string;
  alt: string;
};

type Link = {
  src: string;
  text: string;
};

interface AchorParams {
  link: Link;
  image?: Image;
}

export function Anchor({ link, image }: AchorParams) {
  return (
    <a
      className="flex h-full w-full flex-col items-center justify-center rounded-3xl font-semibold leading-8 underline transition duration-300 hover:bg-slate-50"
      href={link.src}
      target="_blank"
      rel="noreferrer"
    >
      {image && (
        <img className="w-16 md:w-20" src={image.src} alt={image.alt} />
      )}
      <span className="font-normal">{link.text}</span>
    </a>
  );
}

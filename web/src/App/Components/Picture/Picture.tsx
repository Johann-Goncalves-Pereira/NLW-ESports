import { Key } from "react";

type SourceProps = {
  myKey: Key;
  path: string;
  fileName: string;
  extension: string;
};

type PictureProps = {
  alt: string;
  path: string;
  exts: string[];
  baseImg: { name: string; ext: string };
  className?: string;
};

const Source = (p: SourceProps) => {
  return (
    <source key={p.myKey} srcSet={`${p.path}/${p.fileName}.${p.extension}`} />
  );
};

const Picture = (p: PictureProps) => {
  return (
    <picture>
      {p.exts.map((ext) => {
        return (
          <Source
            path={p.path}
            fileName={p.baseImg.name}
            extension={ext}
            myKey={ext}
          />
        );
      })}

      <img
        className={p.className}
        src={`${p.path}/${p.baseImg.name}.${p.baseImg.ext}`}
        alt={p.alt}
      />
    </picture>
  );
};

export default Picture;

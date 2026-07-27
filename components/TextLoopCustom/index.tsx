import { TextLoop } from "../motion-primitives/text-loop";

export function TextLoopCustom() {
  return (
    <h1 className="text-center font-dm-sans text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold">
      {" "}
      Organize o conhecimento disperso da internet em{" "}
      <TextLoop
        className="inline-flex leading-none"
        transition={{
          type: "spring",
          stiffness: 900,
          damping: 80,
          mass: 10,
        }}
        variants={{
          initial: {
            y: 20,
            rotateX: 90,
            opacity: 0,
            filter: "blur(4px)",
          },
          animate: {
            y: 0,
            rotateX: 0,
            opacity: 1,
            filter: "blur(0px)",
          },
          exit: {
            y: -20,
            rotateX: -90,
            opacity: 0,
            filter: "blur(4px)",
          },
        }}
      >
        <span>trilhas de estudo</span>
        <span>jornadas de aprendizado</span>
        <span>rotas organizadas</span>
        <span>guias colaborativos</span>
      </TextLoop>
    </h1>
  );
}

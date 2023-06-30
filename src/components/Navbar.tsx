import { NextLink } from "./NextLink";

export const Navbar = () => {
  return (
    <nav className="flex gap-6">
      <NextLink href="/current">Clima Atual</NextLink>
      <NextLink href="/forecast">Próximos Dias</NextLink>
      <NextLink href="/interval">Intervalo de 3 horas</NextLink>
    </nav>
  );
};

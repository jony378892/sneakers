import NavLink from "./nav-link";

export default function NavLinks({ ...props }) {
  return (
    <div {...props}>
      <NavLink href="/products">Products</NavLink>
      <NavLink href="/contact">Contact</NavLink>
      <NavLink href="/about">About us</NavLink>
    </div>
  );
}

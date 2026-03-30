"use client";

export function Footer() {
  return (
    <footer className="w-full py-8 border-t border-white/10 text-center bg-[#030303]">
      <p className="text-zinc-500 text-sm max-w-lg mx-auto leading-relaxed px-4">
        Энэхүү төсөл нь зөвхөн академик зорилгоор бүтээгдсэн бөгөөд бодит ажлын зар биш болно.<br />
      </p>
      <p className="text-zinc-600 text-xs mt-4">
        &copy; {new Date().getFullYear()} Nexora Labs. Бүх эрх хуулиар хамгаалагдсан.
      </p>
    </footer>
  );
}

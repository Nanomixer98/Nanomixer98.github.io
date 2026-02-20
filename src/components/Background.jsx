export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#071208] via-[#0a1a0f] to-[#040d06]" />

      <div className="blob w-[500px] h-[500px] bg-emerald-700 top-[-10%] left-[-5%] animate-float-slow" />
      <div className="blob w-[400px] h-[400px] bg-teal-700 top-[20%] right-[-10%] animate-float-slower" />
      <div className="blob w-[350px] h-[350px] bg-green-800 bottom-[10%] left-[20%] animate-float-slowest" />
      <div className="blob w-[300px] h-[300px] bg-amber-900/60 bottom-[-5%] right-[15%] animate-float-slow" />

      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')]" />
    </div>
  )
}

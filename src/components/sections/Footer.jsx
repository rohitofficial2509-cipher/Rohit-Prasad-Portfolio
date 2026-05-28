export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-800 bg-slate-950">
      <div className="section-shell py-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Rohit Prasad. Senior Data Analyst portfolio.</p>
        <p>Kolkata, West Bengal</p>
      </div>
    </footer>
  );
}

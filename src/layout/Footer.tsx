export default function Footer() {
    return (
      <footer className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-6 text-sm flex justify-between">
          <span>© {new Date().getFullYear()} Muhdin</span>
          <div className="flex gap-4">
            <a href="https://github.com/mudin9838/" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/muhdin-mussema-5b46b0208/" target="_blank">LinkedIn</a>
          </div>
        </div>
      </footer>
    );
  }
  
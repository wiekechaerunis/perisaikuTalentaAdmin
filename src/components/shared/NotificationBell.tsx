import { useState } from "react";
import { Bell, BellOff, User, Sparkles, Calendar, CreditCard } from "lucide-react";

interface NotificationItem { id: string; icon: "applicant" | "match" | "interview" | "billing"; message: string; time: string; read: boolean }

const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  { id: "n1", icon: "applicant", message: "Ananda Putri melamar sebagai Manajer Produk Senior", time: "5 menit lalu", read: false },
  { id: "n2", icon: "match", message: "8 Kandidat baru cocok dengan kriteria desainer UI/UX Anda", time: "2 jam lalu", read: false },
  { id: "n3", icon: "interview", message: "Interview teknis terjadwal dengan Budi Perkasa pada 12 Jan 2026, jam 10:00", time: "4 jam lalu", read: true },
  { id: "n4", icon: "applicant", message: "Candra Wijaya melamar sebagai DevOps Engineer", time: "Yesterday", read: true },
  { id: "n5", icon: "billing", message: "Masa Pro Trial Anda akan berakhir dalam 3 hari. Perbarui tagihan.", time: "Kemarin", read: true },
  { id: "n6", icon: "match", message: "Kandidat handal Rian Dwi terdeteksi cocok dengan kriteria Backend", time: "2 hari lalu", read: true },
];

const NOTIFICATION_ICON: Record<NotificationItem["icon"], React.ComponentType<{ size?: number; className?: string }>> = {
  applicant: User, match: Sparkles, interview: Calendar, billing: CreditCard,
};

export function NotificationBell() {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState<NotificationItem[]>(INITIAL_NOTIFICATIONS);
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="relative">
      <button onClick={() => setOpen(v => !v)} aria-label="Notifikasi" className="relative border border-border-lighter rounded-full p-2.5">
        <Bell size={20} className="text-text-muted" />
        {unreadCount > 0 && <span className="absolute right-1.5 top-1.5 size-2 rounded-full bg-[#ff6b35]" />}
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute z-50 top-[calc(100%+8px)] right-0 flex w-[380px] flex-col overflow-hidden rounded-xl border border-[#e4e4e7] bg-white shadow-[0px_12px_24px_rgba(0,0,0,0.12)]" style={{ fontFamily: "var(--font-body)" }}>
            <div className="flex shrink-0 items-center justify-between border-b border-[#e4e4e7] p-4">
              <p className="text-[16px] font-bold text-text-default">Notifikasi</p>
              {unreadCount > 0 && (
                <button onClick={() => setNotifications(prev => prev.map(n => ({ ...n, read: true })))} className="text-[14px] font-semibold text-brand-primary hover:underline">
                  Tandai semua dibaca
                </button>
              )}
            </div>
            {notifications.length === 0 ? (
              <div className="flex flex-col items-center gap-3 px-6 py-10 text-center">
                <div className="flex size-[72px] items-center justify-center rounded-full bg-surface"><BellOff size={32} className="text-border-default" /></div>
                <div>
                  <p className="text-[14px] font-bold text-text-default">Belum ada notifikasi</p>
                  <p className="mt-1 text-[12px] text-text-lighter">Notifikasi baru akan muncul di sini.</p>
                </div>
              </div>
            ) : (
              <div className="max-h-[420px] overflow-y-auto">
                {notifications.map((n) => {
                  const Icon = NOTIFICATION_ICON[n.icon];
                  return (
                    <button
                      key={n.id}
                      onClick={() => setNotifications(prev => prev.map(item => item.id === n.id ? { ...item, read: true } : item))}
                      className={`flex w-full items-start gap-3 border-b border-[#f1f5f9] p-4 text-left transition-colors last:border-b-0 hover:bg-[#f9fafb] ${!n.read ? "bg-[#ebf2ff]" : "bg-white"}`}
                    >
                      <div className={`flex size-8 shrink-0 items-center justify-center rounded-lg ${!n.read ? "bg-white" : "bg-surface"}`}>
                        <Icon size={14} className={!n.read ? "text-brand-primary" : "text-icon-default"} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className={`text-[13px] leading-[1.4] ${!n.read ? "font-semibold text-text-default" : "font-medium text-[#09090b]"}`}>{n.message}</p>
                        <p className="mt-1 text-[11px] text-[#71717a]">{n.time}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
            <div className="flex shrink-0 items-center justify-center border-t border-[#f1f5f9] p-4">
              <span className="text-[13px] font-semibold text-brand-primary">Lihat semua notifikasi</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

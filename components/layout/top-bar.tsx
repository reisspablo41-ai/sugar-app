import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export function TopBar() {
    return (
        <div className="text-white text-sm" style={{ backgroundColor: 'hsl(28, 51%, 20%)' }}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-center items-center py-1 gap-2 md:gap-8">
                    {/* Contact Info */}
                    <div className="flex flex-wrap items-center gap-4 md:gap-6 text-xs">
                        <Link
                            href="mailto:info@sugar-supplier.com"
                            className="flex items-center gap-2 hover:text-secondary transition-colors"
                        >
                            <Mail className="h-3 w-3" />
                            <span>info@sugar-supplier.com</span>
                        </Link>
                        <Link
                            href="https://wa.me/1234567890"
                            className="flex items-center gap-2 hover:text-secondary transition-colors"
                        >
                            <Phone className="h-3 w-3" />
                            <span>WhatsApp: +1 (234) 567-890</span>
                        </Link>
                        <div className="flex items-center gap-2">
                            <MapPin className="h-3 w-3" />
                            <span>São Paulo, Brazil</span>
                        </div>
                    </div>

                    {/* Optional: Social or additional links */}
                    <div className="text-xs opacity-90 hidden sm:block">
                        Quality Sugar Since 1998
                    </div>
                </div>
            </div>
        </div>
    );
}

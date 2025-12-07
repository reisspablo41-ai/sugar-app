import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export function TopBar() {
    return (
        <div className="bg-primary text-white text-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center py-2 gap-2">
                    {/* Contact Info */}
                    <div className="flex flex-wrap items-center gap-4 md:gap-6">
                        <Link
                            href="mailto:info@brazilsugar.com"
                            className="flex items-center gap-2 hover:text-secondary transition-colors"
                        >
                            <Mail className="h-4 w-4" />
                            <span>info@brazilsugar.com</span>
                        </Link>
                        <Link
                            href="tel:+551112345678"
                            className="flex items-center gap-2 hover:text-secondary transition-colors"
                        >
                            <Phone className="h-4 w-4" />
                            <span>+55 (11) 1234-5678</span>
                        </Link>
                        <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>São Paulo, Brazil</span>
                        </div>
                    </div>

                    {/* Optional: Social or additional links */}
                    <div className="text-xs md:text-sm opacity-90">
                        Quality Sugar Since 1998
                    </div>
                </div>
            </div>
        </div>
    );
}

import { TypographyMuted } from "@/components/ui/typography";

export default function SpecTable() {
  return (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full border-collapse">
        <tbody>
          <tr className="border-t border-gray-300">
            <td className="px-4 py-2 font-semibold">Processor</td>
            <td className="px-4 py-2">
              Broadcom BCM2711, Quad-core Cortex-A72 (ARM v8) 64-bit SoC @
              1.5GHz
            </td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="px-4 py-2 font-semibold">RAM</td>
            <td className="px-4 py-2">2GB / 4GB / 8GB LPDDR4-3200</td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="px-4 py-2 font-semibold">Storage</td>
            <td className="px-4 py-2">
              microSD card slot (supports booting from USB devices)
            </td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="px-4 py-2 font-semibold">Connectivity</td>
            <td className="px-4 py-2">
              Gigabit Ethernet, 2.4/5.0 GHz Wi-Fi, Bluetooth 5.0
            </td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="px-4 py-2 font-semibold">USB Ports</td>
            <td className="px-4 py-2">2 × USB 3.0, 2 × USB 2.0</td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="px-4 py-2 font-semibold">Video Output</td>
            <td className="px-4 py-2">2 × micro-HDMI (supports up to 4Kp60)</td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="px-4 py-2 font-semibold">Power Supply</td>
            <td className="px-4 py-2">5V/3A USB-C</td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="px-4 py-2 font-semibold">GPIO</td>
            <td className="px-4 py-2">40-pin GPIO header</td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="px-4 py-2 font-semibold">Operating System</td>
            <td className="px-4 py-2">
              Raspberry Pi OS (Linux-based), supports Ubuntu, Arch Linux, etc.
            </td>
          </tr>
        </tbody>
      </table>
      {/* TODO: Change to real specification */}
      <TypographyMuted className="text-right">
        This information is subjected to change.
      </TypographyMuted>
    </div>
  );
}

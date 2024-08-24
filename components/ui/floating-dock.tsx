"use client";

import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import { useTheme } from "next-themes";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
  themeToggler,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
  themeToggler: React.ReactNode;
}) => {
  return (
    <FloatingDockDesktop
      items={items}
      className={cn("max-w-[calc(100%_-_2rem)]", desktopClassName, mobileClassName)}
      themeToggler={themeToggler}
    />
  );
};

const FloatingDockDesktop = ({
  items,
  className,
  themeToggler,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
  themeToggler: React.ReactNode;
}) => {
  let mouseX = useMotionValue(Infinity);

  const { theme, setTheme } = useTheme();

  const handleThemeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "flex h-14 gap-4 items-end rounded-2xl bg-gray-50 dark:bg-neutral-900 px-4 pb-3 rounded-full",
        className
      )}
    >
      {/* Render icons */}
      {items.map((item) => (
        <IconContainer
          mouseX={mouseX}
          key={item.title}
          {...item}
        />
      ))}

      <IconContainer
        mouseX={mouseX}
        title="Toggle Theme"
        icon={themeToggler}
        href="#"
        onClick={handleThemeToggle}
      />
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  onClick,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
  onClick?: () => void;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [32, 64, 32]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [32, 64, 32]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [16, 32, 16]);
  let heightTransformIcon = useTransform(distance, [-150, 0, 150], [16, 32, 16]);

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      style={{ width, height }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative rounded-full"
      onClick={onClick}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 2, x: "-50%" }}
            className="px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
          >
            {title}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        style={{ width: widthIcon, height: heightIcon }}
        className="flex items-center justify-center"
      >
        {icon}
      </motion.div>
    </motion.div>
  );
}

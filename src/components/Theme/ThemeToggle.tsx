import React, { Fragment, useState, useEffect } from "react";
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/outline'

type themeToggleProps = React.ReactNode

function ThemeToggle(): themeToggleProps {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null;

    const { systemTheme, theme, setTheme } = useTheme();

    const currentTheme = theme === "system" ? systemTheme : theme

    if (currentTheme === 'dark') {
        return (
            <Fragment key={"SunIcon"}>
                <SunIcon className="w-8 cursor-pointer text-yellow-500" onClick={() => setTheme('light')} />
            </Fragment>
        )
    } else if (currentTheme === 'light') {
        return (
            <Fragment key={"MoonIcon"}>
                <MoonIcon className="w-8 cursor-pointer text-gray-700" onClick={() => setTheme('dark')} />
            </Fragment>
        )
    }
}

export default ThemeToggle
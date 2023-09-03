'use client'
import cn from 'classnames'
import useResponsive from '@/utils/media-query'
const Container = ({ className, children }) => {
    const { isMobile } = useResponsive()
    return (
        <div className={cn("flex flex-col w-full", isMobile ? "" : "px-[6.25rem]", className)}>
            {children}
        </div>
    )
}

export default Container
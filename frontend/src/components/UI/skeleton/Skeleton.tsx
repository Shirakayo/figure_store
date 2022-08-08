import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton: React.FC = () => (
    <ContentLoader
        speed={2}
        width={150}
        height={300}
        viewBox="0 0 150 300"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="4" y="1" rx="0" ry="0" width="225" height="130" />
        <rect x="4" y="144" rx="0" ry="0" width="100" height="24" />
        <rect x="2" y="175" rx="0" ry="0" width="139" height="61" />
        <rect x="4" y="245" rx="0" ry="0" width="101" height="16" />
        <rect x="5" y="274" rx="0" ry="0" width="96" height="35" />
    </ContentLoader>
)

export default Skeleton



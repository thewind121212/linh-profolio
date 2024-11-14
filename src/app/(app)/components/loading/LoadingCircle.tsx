import React, { forwardRef } from "react";

const LoadingCircle = forwardRef<SVGSVGElement, { fillColor?: string, className?: string }>(
    (
        { fillColor, className },
        ref
    ) => (
        <svg
            ref={ref}  // Attach the forwarded ref here
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500"
            width="100%"
            className={`loader_svg ${className}`}
        >
            <g
                transform="matrix(3.0810909271240234, 0, 0, 3.0810909271240234, -520.272705078125, -520.272705078125)"
            >
                <circle
                    cx={250}
                    cy={250}
                    r={75}
                    stroke="currentColor"
                    style={{
                        strokeDasharray: 470.48,
                    }}
                    fill={fillColor || "#FBF0DA"}
                    className="loader_circle"
                />
            </g>
        </svg>
    )
);

LoadingCircle.displayName = "LoadingCircle";

export default LoadingCircle;

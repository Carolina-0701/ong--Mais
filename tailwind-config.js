
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "surface-tint": "#963c7e",
                "inverse-primary": "#ffade2",
                "on-surface": "#0b1c30",
                "on-tertiary-fixed": "#1c1d00",
                "on-tertiary": "#ffffff",
                "secondary-fixed-dim": "#ffb781",
                "secondary-fixed": "#ffdcc4",
                "on-primary": "#ffffff",
                "outline": "#84727c",
                "surface-variant": "#d3e4fe",
                "primary": "#762062",
                "primary-fixed": "#ffd8ed",
                "secondary-container": "#fe9336",
                "outline-variant": "#d6c1cb",
                "on-error-container": "#93000a",
                "primary-container": "#93397b",
                "on-background": "#0b1c30",
                "background": "#f8f9ff",
                "error": "#ba1a1a",
                "on-secondary-container": "#683400",
                "tertiary-fixed": "#e7e963",
                "tertiary-container": "#5e5f00",
                "tertiary": "#464700",
                "on-primary-fixed": "#3b002f",
                "error-container": "#ffdad6",
                "tertiary-fixed-dim": "#cbcd4a",
                "on-secondary-fixed-variant": "#703800",
                "surface": "#f8f9ff",
                "surface-container-high": "#dce9ff",
                "on-error": "#ffffff",
                "inverse-on-surface": "#eaf1ff",
                "on-primary-fixed-variant": "#7a2365",
                "surface-container-low": "#eff4ff",
                "on-secondary-fixed": "#2f1400",
                "surface-bright": "#f8f9ff",
                "on-tertiary-fixed-variant": "#484a00",
                "surface-container": "#e5eeff",
                "inverse-surface": "#213145",
                "surface-dim": "#cbdbf5",
                "on-surface-variant": "#52424b",
                "on-tertiary-container": "#d9db56",
                "surface-container-lowest": "#ffffff",
                "primary-fixed-dim": "#ffade2",
                "surface-container-highest": "#d3e4fe",
                "on-secondary": "#ffffff",
                "on-primary-container": "#ffc2e7",
                "secondary": "#934b00"
            },
            "borderRadius": {
                "DEFAULT": "0.125rem",
                "lg": "0.25rem",
                "xl": "0.5rem",
                "full": "0.75rem"
            },
            "spacing": {
                "xl": "32px",
                "md": "16px",
                "lg": "24px",
                "gutter": "16px",
                "sm": "8px",
                "base": "4px",
                "margin-mobile": "16px",
                "xs": "4px",
                "margin-desktop": "32px"
            },
            "fontFamily": {
                "headline-lg": ["Inter"],
                "data-mono": ["Inter"],
                "body-lg": ["Inter"],
                "body-md": ["Inter"],
                "label-caps": ["Inter"],
                "headline-sm": ["Inter"],
                "headline-md": ["Inter"],
                "body-sm": ["Inter"]
            },
            "fontSize": {
                "headline-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                "data-mono": ["14px", {"lineHeight": "20px", "fontWeight": "500"}],
                "body-lg": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                "body-md": ["14px", {"lineHeight": "20px", "fontWeight": "400"}],
                "label-caps": ["12px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "700"}],
                "headline-sm": ["20px", {"lineHeight": "28px", "fontWeight": "600"}],
                "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
                "body-sm": ["13px", {"lineHeight": "18px", "fontWeight": "400"}]
            }
        }
    }
};
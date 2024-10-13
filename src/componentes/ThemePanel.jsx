import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemePanel = () => {
    const { theme, handleThemeChange } = useContext(ThemeContext);

    return (
        <div className="p-4 bg-white rounded shadow-md">
            <h3 className="font-bold text-lg mb-4">Theme Colors</h3>
            <div className="flex gap-2 mb-6">
                {['blue', 'green', 'cyan', 'orange'].map((color) => (
                    <button
                        key={color}
                        onClick={() => handleThemeChange('color', color)}
                        className={`w-8 h-8 rounded-full ${theme.color === color ? 'ring-4 ring-purple-500' : ''
                            } bg-${color}-500`}
                    ></button>
                ))}
            </div>

            <h3 className="font-bold text-lg mb-4">Layout Type</h3>
            <div className="flex gap-4 mb-6">
                {['vertical', 'horizontal'].map((layout) => (
                    <button
                        key={layout}
                        onClick={() => handleThemeChange('layout', layout)}
                        className={`p-2 border rounded ${theme.layout === layout ? 'border-purple-500' : 'border-gray-300'
                            }`}
                    >
                        {layout.charAt(0).toUpperCase() + layout.slice(1)}
                    </button>
                ))}
            </div>

            <h3 className="font-bold text-lg mb-4">Container Option</h3>
            <div className="flex gap-4 mb-6">
                {['boxed', 'full'].map((container) => (
                    <button
                        key={container}
                        onClick={() => handleThemeChange('container', container)}
                        className={`p-2 border rounded ${theme.container === container
                                ? 'border-purple-500'
                                : 'border-gray-300'
                            }`}
                    >
                        {container.charAt(0).toUpperCase() + container.slice(1)}
                    </button>
                ))}
            </div>

            <h3 className="font-bold text-lg mb-4">Sidebar Type</h3>
            <div className="flex gap-4 mb-6">
                {['full', 'mini'].map((sidebar) => (
                    <button
                        key={sidebar}
                        onClick={() => handleThemeChange('sidebar', sidebar)}
                        className={`p-2 border rounded ${theme.sidebar === sidebar ? 'border-purple-500' : 'border-gray-300'
                            }`}
                    >
                        {sidebar.charAt(0).toUpperCase() + sidebar.slice(1)}
                    </button>
                ))}
            </div>

            <h3 className="font-bold text-lg mb-4">Card Style</h3>
            <div className="flex gap-4 mb-6">
                {['border', 'shadow'].map((card) => (
                    <button
                        key={card}
                        onClick={() => handleThemeChange('card', card)}
                        className={`p-2 border rounded ${theme.card === card ? 'border-purple-500' : 'border-gray-300'
                            }`}
                    >
                        {card.charAt(0).toUpperCase() + card.slice(1)}
                    </button>
                ))}
            </div>

            <h3 className="font-bold text-lg mb-4">Theme Border Radius</h3>
            <input
                type="range"
                min="0"
                max="50"
                value={theme.borderRadius}
                onChange={(e) => handleThemeChange('borderRadius', e.target.value)}
                className="w-full"
            />
        </div>
    );
};

export default ThemePanel;

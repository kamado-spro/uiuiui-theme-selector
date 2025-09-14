const palette = [
    { name: "Gaggiuino Orange", hex: "#E64829" },
    { name: "Deep Blue", hex: "#023047" },
    { name: "True Red", hex: "#d00000" },
    { name: "Dirty Green", hex: "#84a98c" },
    { name: "Light Brown", hex: "#e6ccb2" },
    { name: "Pinkish", hex: "#ffb5a7" },
    { name: "Deep Purple", hex: "#b5179e" },
    { name: "Espresso Brown", hex: "#4B382A" },
    { name: "Latte Cream", hex: "#C89F91" },
    { name: "Mocha Brown", hex: "#3E2723" },
    { name: "Caramel Drizzle", hex: "#D2691E" },
    { name: "Macchiato Gold", hex: "#FFD700" },
    { name: "Caffé au Lait", hex: "#A67B5B" },
    { name: "Cappuccino Foam", hex: "#B5651D" },
    { name: "Americano Black", hex: "#2F1B0C" },
    { name: "Irish Coffee", hex: "#5A3A22" },
    { name: "Vanilla Bean", hex: "#F5E6CC" },
    { name: "Iced Coffee", hex: "#8B6F47" },
    { name: "Ristretto", hex: "#362511" },
    { name: "Light Blue", hex: "#ADD8E6" },
    { name: "Medium Light Blue", hex: "#87CEFA" },
    { name: "Dark Blue", hex: "#00008B" },
    { name: "Light Green", hex: "#90EE90" },
    { name: "Medium Light Green", hex: "#32CD32" },
    { name: "Dark Green", hex: "#006400" },
    { name: "Light Yellow", hex: "#FFFFE0" },
    { name: "Medium Light Yellow", hex: "#FFFACD" },
    { name: "Dark Yellow", hex: "#FFD700" },
    { name: "Light Purple", hex: "#E6E6FA" },
    { name: "Medium Light Purple", hex: "#9370DB" },
    { name: "Dark Purple", hex: "#4B0082" },
    { name: "Light Red", hex: "#FFB6C1" },
    { name: "Medium Light Red", hex: "#FF6347" },
    { name: "Dark Red", hex: "#8B0000" },
    { name: "Light Brown", hex: "#D2B48C" },
    { name: "Medium Light Brown", hex: "#A0522D" },
    { name: "Dark Brown", hex: "#654321" },
    { name: "Light Orange", hex: "#FFA07A" },
    { name: "Medium Light Orange", hex: "#FF8C00" },
    { name: "Dark Orange", hex: "#FF4500" },
    { name: "Light Pink", hex: "#FFB6C1" },
    { name: "Medium Light Pink", hex: "#FF69B4" },
    { name: "Dark Pink", hex: "#C71585" },
    { name: "Light Aqua", hex: "#8cc1d6" },
    { name: "Dark Teal", hex: "#073e55" },
    { name: "Dark magenta", hex: "#4d192c" }
];

/*
Color definitions are from 
https://discord.com/channels/890339612441063494/1284530105816711168/1375040718308900875 

------ COLOUR DEFINITION ----------- COLOUR HEX ------------- COLOUR NAME ------
#define COLOR_IUIUIU_ORANGE          lv_color_hex(0xE64829) // Gaggiuino Orange 
#define COLOR_IUIUIU_BLUE            lv_color_hex(0x023047) // Deep Blue 
#define COLOR_IUIUIU_RED             lv_color_hex(0xd00000) // True Red 
#define COLOR_IUIUIU_DIRTY_GREEN     lv_color_hex(0x84a98c) // Dirty Green 
#define COLOR_IUIUIU_LIGHT_BROWN     lv_color_hex(0xe6ccb2) // Light Brown 
#define COLOR_IUIUIU_PINKISH         lv_color_hex(0xffb5a7) // Pinkish 
#define COLOR_IUIUIU_DEEP_PURP       lv_color_hex(0xb5179e) // Deep Purple 
#define COLOR_ESPRESSO               lv_color_hex(0x4B382A) // Espresso Brown 
#define COLOR_LATTE                  lv_color_hex(0xC89F91) // Latte Cream 
#define COLOR_MOCHA                  lv_color_hex(0x3E2723) // Mocha Brown 
#define COLOR_CARAMEL                lv_color_hex(0xD2691E) // Caramel Drizzle 
#define COLOR_MACCHIATO              lv_color_hex(0xFFD700) // Macchiato Gold 
#define COLOR_CAFFE_AU_LAIT          lv_color_hex(0xA67B5B) // Caffé au Lait 
#define COLOR_CAPPUCCINO             lv_color_hex(0xB5651D) // Cappuccino Foam 
#define COLOR_AMERICANO              lv_color_hex(0x2F1B0C) // Americano Black 
#define COLOR_IRISH_COFFEE           lv_color_hex(0x5A3A22) // Irish Coffee 
#define COLOR_VANILLA_BEAN           lv_color_hex(0xF5E6CC) // Vanilla Bean 
#define COLOR_ICED_COFFEE            lv_color_hex(0x8B6F47) // Iced Coffee 
#define COLOR_RISTRETTO              lv_color_hex(0x362511) // Ristretto 
#define COLOR_LIGHT_BLUE             lv_color_hex(0xADD8E6) // Light Blue 
#define COLOR_MEDIUM_LIGHT_BLUE      lv_color_hex(0x87CEFA) // Medium Light Blue 
#define COLOR_DARK_BLUE              lv_color_hex(0x00008B) // Dark Blue 
#define COLOR_LIGHT_GREEN            lv_color_hex(0x90EE90) // Light Green 
#define COLOR_MEDIUM_LIGHT_GREEN     lv_color_hex(0x32CD32) // Medium Light Green 
#define COLOR_DARK_GREEN             lv_color_hex(0x006400) // Dark Green 
#define COLOR_LIGHT_YELLOW           lv_color_hex(0xFFFFE0) // Light Yellow 
#define COLOR_MEDIUM_LIGHT_YELLOW    lv_color_hex(0xFFFACD) // Medium Light Yellow 
#define COLOR_DARK_YELLOW            lv_color_hex(0xFFD700) // Dark Yellow 
#define COLOR_LIGHT_PURPLE           lv_color_hex(0xE6E6FA) // Light Purple 
#define COLOR_MEDIUM_LIGHT_PURPLE    lv_color_hex(0x9370DB) // Medium Light Purple 
#define COLOR_DARK_PURPLE            lv_color_hex(0x4B0082) // Dark Purple 
#define COLOR_LIGHT_RED              lv_color_hex(0xFFB6C1) // Light Red 
#define COLOR_MEDIUM_LIGHT_RED       lv_color_hex(0xFF6347) // Medium Light Red 
#define COLOR_DARK_RED               lv_color_hex(0x8B0000) // Dark Red 
#define COLOR_LIGHT_BROWN            lv_color_hex(0xD2B48C) // Light Brown 
#define COLOR_MEDIUM_LIGHT_BROWN     lv_color_hex(0xA0522D) // Medium Light Brown 
#define COLOR_DARK_BROWN             lv_color_hex(0x654321) // Dark Brown 
#define COLOR_LIGHT_ORANGE           lv_color_hex(0xFFA07A) // Light Orange 
#define COLOR_MEDIUM_LIGHT_ORANGE    lv_color_hex(0xFF8C00) // Medium Light Orange 
#define COLOR_DARK_ORANGE            lv_color_hex(0xFF4500) // Dark Orange 
#define COLOR_LIGHT_PINK             lv_color_hex(0xFFB6C1) // Light Pink 
#define COLOR_MEDIUM_LIGHT_PINK      lv_color_hex(0xFF69B4) // Medium Light Pink 
#define COLOR_DARK_PINK              lv_color_hex(0xC71585) // Dark Pin 
#define COLOR_IUIUIU_PASTEL_AQUA     lv_color_hex(0x8cc1d6) // Light Aqua 
#define COLOR_IUIUIU_DARK_TEAL       lv_color_hex(0x073e55) // Dark Teal 
#define COLOR_IUIUIU_DARK_MAGENTA    lv_color_hex(0x4d192c) // Dark magenta 
*/


window.addEventListener('DOMContentLoaded', () => {
    handlePrimaryColor(palette[0]);
    handleSecondaryColor(palette[1]);
    handleDarkMode();
    handleColorSelector();
});

// Sidebar button interactions
document.querySelectorAll('.sidebar-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.sidebar-btn').forEach(b => b.classList.remove('active'));
        button.classList.add('active');
    });
});

// Sidebar button interactions
document.querySelectorAll('.profile-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.profile-btn').forEach(b => b.classList.remove('active'));
        button.classList.add('active');
    });
});


// Control button interactions
document.querySelectorAll('.control-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.control-button').forEach(b => b.classList.remove('active'));
        button.classList.add('active');
    });
});

// Weight adjustment buttons
document.querySelectorAll('.weight-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const valueEl = document.querySelector('.weight-value');
        let currentValue = parseFloat(valueEl.textContent);

        if (btn.textContent === '+') {
            currentValue += 1.0;
        } else {
            currentValue = Math.max(0, currentValue - 1.0);
        }

        valueEl.textContent = currentValue.toFixed(1);
    });
});


// Swap Color
document.querySelectorAll('.weight-display').forEach(btn => {
    btn.addEventListener('click', (e) => {
        // get current variable values
        const root = document.documentElement;
        const styles = getComputedStyle(root);

        const primary = styles.getPropertyValue('--primary-color').trim();
        const secondary = styles.getPropertyValue('--secondary-color').trim();

        // swap them
        root.style.setProperty('--primary-color', secondary);
        root.style.setProperty('--secondary-color', primary);

        // also update text content
        const selectedPrimary = document.getElementById('selectedPrimaryColor');
        const selectedSecondary = document.getElementById('selectedSecondaryColor');

        const tempText = selectedPrimary.textContent;
        selectedPrimary.textContent = selectedSecondary.textContent;
        selectedSecondary.textContent = tempText;
    });
});

// Simulate temperature fluctuation
setInterval(() => {
    const tempEl = document.querySelector('.temp-main');
    const baseTemp = 94.4;
    const fluctuation = (Math.random() - 0.5) * 0.4;
    const newTemp = baseTemp + fluctuation;
    tempEl.textContent = newTemp.toFixed(1) + '°C';
}, 2000);

// Update timer
let seconds = 11 * 60; // 11 minutes
setInterval(() => {
    seconds++;
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    document.querySelector('.timer').textContent =
        `${hours.toString().padStart(2, '0')}h:${mins.toString().padStart(2, '0')}m`;
}, 1000);


const toggleDarkMode = document.getElementById('toggleDarkMode');
toggleDarkMode.addEventListener('change', () => {
    handleDarkMode();
});
const toggleColorSelector = document.getElementById('toggleColorSelector');
toggleColorSelector.addEventListener('change', () => {
    handleColorSelector()
});

const colorButtonsContainer = document.getElementById("color-buttons");
function createColorButton(color) {
    const button = document.createElement("div");
    button.className = "color-button";
    button.onclick = () => {
        if (toggleColorSelector.checked)
            handleSecondaryColor(color);
        else
            handlePrimaryColor(color);
    };

    const circle = document.createElement("div");
    circle.className = "color-circle";
    circle.style.backgroundColor = color.hex;

    const label = document.createElement("span");
    label.textContent = color.name;

    button.appendChild(circle);
    button.appendChild(label);
    return button;
}
palette.forEach(color => {
    const button = createColorButton(color);
    colorButtonsContainer.appendChild(button);
});

function handleDarkMode() {
    if (toggleDarkMode.checked) {
        document.getElementById('toggleDarkModeText').textContent = 'Dark Mode';
        document.documentElement.style.setProperty('--text-color', "white");
        document.documentElement.style.setProperty('--background-color', "black");
    }
    else {
        document.getElementById('toggleDarkModeText').textContent = 'Light Mode';
        document.documentElement.style.setProperty('--text-color', "black");
        document.documentElement.style.setProperty('--background-color', "white");
    }
}
function handleColorSelector() {
    document.getElementById('toggleColorText').textContent = toggleColorSelector.checked ? 'Accent' : 'Theme';
}
function handlePrimaryColor(color) {
    document.documentElement.style.setProperty('--primary-color', color.hex);
    document.getElementById('selectedPrimaryColor').textContent = color.name
}
function handleSecondaryColor(color) {
    document.documentElement.style.setProperty('--secondary-color', color.hex);
    document.getElementById('selectedSecondaryColor').textContent = color.name
}

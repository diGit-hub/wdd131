const spiritRanks = [
    {
        name: "Spirit Scholar",
        level: "1-10",
        description: "Beginning stage. Spirit power just awakened.",
        abilities: ["Basic spirit manifestation"]
    },
    {
        name: "Spirit Master",
        level: "11-20",
        description: "First spirit ring acquired from a spirit beast.",
        abilities: ["First spirit skill", "Enhanced senses"]
    },
    {
        name: "Grand Spirit Master",
        level: "21-30",
        description: "Second spirit ring. Combat techniques improve.",
        abilities: ["Second spirit skill", "Better control"]
    },
    {
        name: "Spirit Elder",
        level: "31-40",
        description: "Third spirit ring. A true expert emerges.",
        abilities: ["Third spirit skill", "Area attacks"]
    },
    {
        name: "Spirit Ancestor",
        level: "41-50",
        description: "Fourth spirit ring. Respected in the spirit world.",
        abilities: ["Fourth spirit skill", "Advanced techniques"]
    },
    {
        name: "Spirit King",
        level: "51-60",
        description: "Fifth spirit ring. Can lead squadrons in battle.",
        abilities: ["Fifth spirit skill", "Domain basics"]
    },
    {
        name: "Spirit Emperor",
        level: "61-70",
        description: "Sixth spirit ring. Elite status achieved.",
        abilities: ["Sixth spirit skill", "Spirit avatar"]
    },
    {
        name: "Spirit Sage",
        level: "71-80",
        description: "Seventh spirit ring. True expert level.",
        abilities: ["Spirit avatar mastery", "Domain creation"]
    },
    {
        name: "Spirit Douluo",
        level: "81-90",
        description: "Eighth spirit ring. Legendary status.",
        abilities: ["Domain mastery", "Massive power"]
    },
    {
        name: "Title Douluo",
        level: "91-99",
        description: "Ninth spirit ring. Peak of humanity.",
        abilities: ["Ultimate techniques", "Semi-divine power"]
    }
];

const characters = [
    {
        name: "Tang San",
        spirit: "Blue Silver Grass",
        type: "Control",
        rank: "Title Douluo",
        description: "The protagonist with twin spirits.",
        image: "Tang_San_Anime14.webp",
        color: "#1E3A8A"
    },
    {
        name: "Xiao Wu",
        spirit: "Soft Boned Rabbit",
        type: "Agility",
        rank: "Spirit Douluo",
        description: "A 100,000-year spirit beast who became human.",
        image: "Xiao_Wu_Teen_Portal.webp",
        color: "#EC4899"
    },
    {
        name: "Dai Mubai",
        spirit: "White Tiger",
        type: "Power",
        rank: "Spirit Sage",
        description: "Leader of the Seven Shrek Devils.",
        image: "Dai_Mubai_Mug.webp",
        color: "#F59E0B"
    },
    {
        name: "Oscar",
        spirit: "Sausage",
        type: "Support",
        rank: "Spirit Douluo",
        description: "Unique food-type spirit master.",
        image: "Oscar_Anime_34.webp",
        color: "#10B981"
    },
    {
        name: "Ning Rongrong",
        spirit: "Seven Treasure Pagoda",
        type: "Support",
        rank: "Spirit Douluo",
        description: "Heir to the Seven Treasure Glazed Tile Clan.",
        image: "",
        color: "#8B5CF6"
    },
    {
        name: "Ma Hongjun",
        spirit: "Fire Phoenix",
        type: "Power",
        rank: "Spirit Sage",
        description: "Possesses the variant Evil Fire Phoenix.",
        image: "",
        color: "#EF4444"
    },
    {
        name: "Zhu Zhuqing",
        spirit: "Hell Civet",
        type: "Agility",
        rank: "Spirit Sage",
        description: "Speed specialist with stealth capabilities.",
        image: "",
        color: "#6366F1"
    },
    {
        name: "Bibi Dong",
        spirit: "Death Spider Emperor",
        type: "Control",
        rank: "Title Douluo",
        description: "Pope of Spirit Hall and main antagonist.",
        image: "",
        color: "#059669"
    }
];

function populateRankSelect() {
    const select = document.getElementById("rankSelect");
    if (!select) return;
    
    spiritRanks.forEach(rank => {
        const option = document.createElement("option");
        option.value = rank.name;
        option.textContent = rank.name;
        select.appendChild(option);
    });
}

function displayRankInfo() {
    const select = document.getElementById("rankSelect");
    const infoDiv = document.getElementById("rankInfo");
    if (!select || !infoDiv) return;
    
    const selectedRank = spiritRanks.find(rank => rank.name === select.value);
    
    if (selectedRank) {
        let abilitiesList = selectedRank.abilities.map(a => `<li>${a}</li>`).join("");
        infoDiv.innerHTML = `
            <div class="card">
                <h3>${selectedRank.name}</h3>
                <p><strong>Level:</strong> ${selectedRank.level}</p>
                <p>${selectedRank.description}</p>
                <p><strong>Abilities:</strong></p>
                <ul>${abilitiesList}</ul>
            </div>
        `;
    }
}

function saveFavoriteRank() {
    const select = document.getElementById("rankSelect");
    if (!select || !select.value) return;
    
    localStorage.setItem("favoriteRank", select.value);
    showFavoriteRank();
}

function showFavoriteRank() {
    const favDiv = document.getElementById("favoriteRank");
    if (!favDiv) return;
    
    const saved = localStorage.getItem("favoriteRank");
    if (saved) {
        favDiv.innerHTML = `<p><strong>Your favorite rank:</strong> ${saved}</p>`;
    }
}

function populateCharacterFilter() {
    const filter = document.getElementById("typeFilter");
    if (!filter) return;
    
    const types = [...new Set(characters.map(c => c.type))];
    types.forEach(type => {
        const option = document.createElement("option");
        option.value = type;
        option.textContent = type;
        filter.appendChild(option);
    });
}

function displayCharacters() {
    const grid = document.getElementById("charsGrid");
    const filter = document.getElementById("typeFilter");
    if (!grid) return;
    
    const selectedType = filter ? filter.value : "all";
    
    grid.innerHTML = "";
    
    characters.forEach(char => {
        if (selectedType !== "all" && char.type !== selectedType) {
            return;
        }
        
        const isFav = localStorage.getItem("favChar") === char.name;
        
        let imgHtml;
        if (char.image) {
            imgHtml = `<img src="images/${char.image}" alt="${char.name}" loading="lazy">`;
        } else {
            imgHtml = `<div class="char-img" style="background-color: ${char.color}"><span>${char.name}</span></div>`;
        }
        
        grid.innerHTML += `
            <div class="char-card">
                ${imgHtml}
                <h3>${char.name}</h3>
                <p><strong>Spirit:</strong> ${char.spirit}</p>
                <p><strong>Type:</strong> ${char.type}</p>
                <p><strong>Rank:</strong> ${char.rank}</p>
                <p>${char.description}</p>
                <button onclick="saveFavoriteChar('${char.name}')">
                    ${isFav ? "★ Saved" : "☆ Save as Favorite"}
                </button>
            </div>
        `;
    });
}

function saveFavoriteChar(name) {
    localStorage.setItem("favChar", name);
    displayCharacters();
    showFavoriteCharacter();
}

function showFavoriteCharacter() {
    const favDiv = document.getElementById("favoriteChar");
    if (!favDiv) return;
    
    const saved = localStorage.getItem("favChar");
    if (saved) {
        favDiv.innerHTML = `<p><strong>Your favorite character:</strong> ${saved}</p>`;
    }
}

function handleForm(event) {
    event.preventDefault();
    
    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    const message = document.getElementById("msgInput").value;
    
    const result = document.getElementById("formResult");
    result.innerHTML = `<p>Thank you, ${name}! We received your message.</p>`;
    
    event.target.reset();
}

document.addEventListener("DOMContentLoaded", () => {
    populateRankSelect();
    populateCharacterFilter();
    displayRankInfo();
    displayCharacters();
    showFavoriteRank();
    showFavoriteCharacter();
    
    const rankSelect = document.getElementById("rankSelect");
    if (rankSelect) {
        rankSelect.addEventListener("change", displayRankInfo);
    }
    
    const saveBtn = document.getElementById("saveBtn");
    if (saveBtn) {
        saveBtn.addEventListener("click", saveFavoriteRank);
    }
    
    const typeFilter = document.getElementById("typeFilter");
    if (typeFilter) {
        typeFilter.addEventListener("change", displayCharacters);
    }
    
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", handleForm);
    }
});

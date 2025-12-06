import { Project, Experience, Skill, Contact, AboutData } from "./types";

export const about: AboutData = {
    name: "Kenan Firmansyah",
    title: [
        "Game Programmer focused on Artificial Intelligence and Gameplay Programming",
        "Can step in as Game Designer when needed",
        "Experienced with Unreal Engine and Unity",
        "Active in game dev since late 2020",
    ],
    summary: [
        "This site showcases published/collab/ongoing projects",
        "I aim for efficient, reusable, easy-to-understand solutions",
        "I also occasionally do other tech projects",
    ],
    contactInvitation: "open to collaboration and opportunities",
};

export const contact: Contact = {
    email: "realkenanfir@gmail.com",
    linkedin: "Kenan Firmansyah",
    github: "Kenanfir",
};

export const projects: Project[] = [
    // ON_GOING
    {
        title: "Asset Tracker",
        slug: "asset-tracker",
        categories: ["tech", "apps", "game"],
        status: "ongoing",
        type: "Tool",
        role: "Developer",
        shortDescription: "Asset tracking tool project listed as ongoing.",
        engineOrStack: ["Web/Tooling"],
        tags: ["tool", "pipeline"],
        featured: true,
        sections: [],
    },
    {
        title: "Game Dev Tool",
        slug: "game-dev-tool",
        categories: ["tech", "game"],
        status: "ongoing",
        teamSize: 1,
        type: "Tool",
        role: "Developer",
        shortDescription:
            "Tool to help asset creators push assets into Git with standard rules like location and naming to streamline creator-to-developer integration.",
        engineOrStack: ["Git", "Tooling"],
        tags: ["pipeline", "assets", "source-control"],
        featured: true,
        sections: [],
    },

    // iOS / Apps (featured on old site)
    {
        title: "Group Session Payment Tracker",
        slug: "group-session-payment-tracker",
        categories: ["apps", "tech"],
        teamSize: 4,
        timeframe: "+1 Weeks",
        type: "iOS",
        role: "iOS Developer",
        shortDescription:
            "Helps organizers manage costs/payments for recurring activities with flexible pricing and automatic per-person calculations.",
        engineOrStack: ["iOS", "Swift"],
        tags: ["finance", "utility"],
        featured: true,
        sections: [],
    },
    {
        title: "Tona",
        slug: "tona",
        categories: ["apps"],
        teamSize: 3,
        timeframe: "+4 Weeks",
        type: "iOS",
        role: "iOS Developer",
        shortDescription:
            "Helps casual Instagram photographers keep a consistent feed by matching tone/color grading from past uploads.",
        engineOrStack: ["iOS", "Swift"],
        tags: ["photo", "ml-assisted"],
        featured: true,
        sections: [],
    },

    // 2025
    {
        title: "Milky Ice Jump (2025)",
        slug: "milky-ice-jump-2025",
        categories: ["apps", "game"],
        teamSize: 2,
        timeframe: "+2 Weeks",
        type: "iOS",
        role: "iOS Developer",
        shortDescription:
            "Quick arcade game; I focused on porting and publishing to the App Store.",
        engineOrStack: ["iOS"],
        tags: ["arcade", "porting"],
        featured: false,
        sections: [],
    },
    {
        title: "Pet Jam (2025)",
        slug: "pet-jam-2025",
        categories: ["apps"],
        teamSize: 5,
        timeframe: "+5 Weeks",
        type: "iOS",
        role: "iOS Developer",
        shortDescription:
            "Apple Watch gamification app to motivate calories burned, inspired by Tamagotchi. Uses WatchKit, SpriteKit, HealthKit, SwiftData.",
        engineOrStack: ["WatchKit", "SpriteKit", "HealthKit", "SwiftData", "Swift"],
        tags: ["apple-watch", "health", "gamification"],
        featured: true,
        sections: [],
    },
    {
        title: "Rantify (2025)",
        slug: "rantify-2025",
        categories: ["apps"],
        teamSize: 1,
        timeframe: "+3 Weeks",
        type: "iOS",
        role: "iOS Developer",
        shortDescription:
            "First iOS app attempt; gives gamified random activities. Built during Apple Developer Academy challenge.",
        engineOrStack: ["iOS", "Swift"],
        tags: ["gamification"],
        featured: false,
        sections: [],
    },
    {
        title: "Last Rite (2024 - 2025)",
        slug: "last-rite",
        categories: ["game"],
        teamSize: 3,
        timeframe: "6 Months",
        type: "UE5",
        role: "Game Programmer",
        shortDescription:
            "Multiplayer horror concept: exorcist helping a mortuary; vibes like Mortuary Assistant + Phasmophobia.",
        engineOrStack: ["Unreal Engine 5"],
        tags: ["horror", "multiplayer"],
        featured: true,
        sections: [],
    },

    // 2024
    {
        title: "Fisherman Manager (2024)",
        slug: "fisherman-manager-2024",
        categories: ["game", "academics"],
        teamSize: 2,
        timeframe: "4 Months",
        type: "UE5",
        role: "Game Programmer & Designer",
        shortDescription:
            "Management game with research-focused DDA combining Q-Learning and Fuzzy Logic.",
        engineOrStack: ["Unreal Engine 5"],
        tags: ["ai", "dda", "management"],
        featured: true,
        sections: [],
    },
    {
        title: "Xanthous (2023 - 2024)",
        slug: "xanthous",
        categories: ["game", "academics"],
        teamSize: 5,
        timeframe: "10 Months",
        type: "UE4",
        role: "Game Programmer (AI)",
        shortDescription:
            "VR horror; final project/thesis. AI systems using Fuzzy Logic, Monte Carlo, Behavior Tree, FSM, AI Perception, etc.",
        engineOrStack: ["Unreal Engine 4"],
        tags: ["vr", "horror", "ai"],
        featured: true,
        sections: [],
    },
    {
        title: "Coblos Son (2024)",
        slug: "coblos-son-2024",
        categories: ["game", "random"],
        teamSize: 4,
        timeframe: "38 Hours",
        type: "Unity",
        role: "Game Programmer",
        shortDescription:
            "Meme-ish GGJ 2024 game simulating a drunk individual in an election context.",
        engineOrStack: ["Unity"],
        tags: ["game-jam", "comedy"],
        featured: false,
        sections: [],
    },

    // 2023
    {
        title: "Echo Remnant (2023)",
        slug: "echo-remnant-2023",
        categories: ["game"],
        teamSize: 2,
        timeframe: "40 Hours",
        type: "UE4",
        role: "Game Programmer & Game Designer",
        shortDescription:
            "Hardcore stealth game using UE4 AI Perception tools; made for Garena GameJam.",
        engineOrStack: ["Unreal Engine 4"],
        tags: ["stealth", "ai", "game-jam"],
        featured: false,
        sections: [],
    },
    {
        title: "F.U.R.Y (2023)",
        slug: "fury-2023",
        categories: ["game"],
        teamSize: 3,
        timeframe: "48 Hours",
        type: "UE5",
        role: "Game Programmer",
        shortDescription:
            "First-person horror-action made for Candela GameJam.",
        engineOrStack: ["Unreal Engine 5"],
        tags: ["horror", "action", "game-jam"],
        featured: false,
        sections: [],
    },
    {
        title: "Slime Sage (2023)",
        slug: "slime-sage-2023",
        categories: ["game"],
        teamSize: 3,
        timeframe: "1 Week",
        type: "Unity",
        role: "Game Programmer",
        shortDescription:
            "Movement-satisfying game inspired by The Pathless movement style; made for GAMELOFT Game Designer Connect.",
        engineOrStack: ["Unity"],
        tags: ["movement", "event"],
        featured: false,
        sections: [],
    },
    {
        title: "Home Server (2023)",
        slug: "home-server-2023",
        categories: ["tech", "random"],
        teamSize: 1,
        timeframe: "3 Months",
        type: "Proxmox",
        role: "Personal Project",
        shortDescription:
            "Self-hosted server setup to host useful services and learn more about technologies.",
        engineOrStack: ["Proxmox", "Linux"],
        tags: ["self-hosting", "infrastructure"],
        featured: false,
        sections: [],
    },
    {
        title: "Priority (2023)",
        slug: "priority-2023",
        categories: ["apps", "tech"],
        teamSize: 2,
        timeframe: "4 Months",
        type: "Flutter",
        role: "App Developer",
        shortDescription:
            "Prototype booking app developed in a government-sponsored business program; uses GCP/Firebase.",
        engineOrStack: ["Flutter", "Firebase", "GCP"],
        tags: ["prototype", "business"],
        featured: false,
        sections: [],
    },

    // 2022
    {
        title: "Bed Time (2022)",
        slug: "bed-time-2022",
        categories: ["game"],
        teamSize: 6,
        timeframe: "48 Hours",
        type: "Unity",
        role: "Game Programmer & Game Designer",
        shortDescription:
            "Side-scrolling survival horror for IGGI GameJam+ 2022; unfinished but meaningful experience.",
        engineOrStack: ["Unity"],
        tags: ["horror", "game-jam"],
        featured: false,
        sections: [],
    },
    {
        title: "Don't Get Hunted (2022)",
        slug: "dont-get-hunted-2022",
        categories: ["game"],
        teamSize: 2,
        timeframe: "1 Week",
        type: "Unity",
        role: "Game Programmer & Game Designer",
        shortDescription:
            "Top-down multiplayer horror using Photon; monster vs human orb power loop.",
        engineOrStack: ["Unity", "Photon"],
        tags: ["multiplayer", "horror"],
        featured: false,
        sections: [],
    },
];

export const experiences: Experience[] = [
    {
        title: "Apple Developer Academy",
        slug: "apple-developer-academy",
        categories: ["apps", "tech", "game"],
        timeframe: "On-Going",
        role: "Apple OS Developer",
        org: "Apple Developer Academy",
        summary:
            "Work in an Apple environment learning hard/soft skills from research, design, and coding for Apple OS apps.",
        highlights: [],
    },
    {
        title: "Ecosoft Interactive (2025)",
        slug: "ecosoft-interactive-2025",
        categories: ["game"],
        timeframe: "2025",
        role: "Game Developer (Unity)",
        org: "Ecosoft Interactive",
        summary:
            "Remote mobile arcade project; contributed to QA and iOS-related development, improving testing and build structure.",
        highlights: [],
    },
    {
        title: "Starpixel Studio (2024 - 2025)",
        slug: "starpixel-studio-2024-2025",
        categories: ["game"],
        timeframe: "2024 - 2025",
        role: "Game Developer (Unreal Engine)",
        org: "Starpixel Studio",
        summary:
            "Lead developer on an undisclosed multiplayer horror game, focusing on gameplay/system mechanics and multiplayer sync structure.",
        highlights: [],
    },

    // 2024 programs & jams
    {
        title: "Google Play x Unity (2024)",
        slug: "google-play-x-unity-2024",
        categories: ["game"],
        timeframe: "2024",
        role: "Game Developer",
        org: "Google Play x Unity",
        summary:
            "7-month Unity-focused training program aimed at certification and broader game dev success discussion.",
        highlights: [],
    },
    {
        title: "Brackeys Game Jam 2024.2",
        slug: "brackeys-game-jam-2024-2",
        categories: ["game"],
        timeframe: "2024",
        role: "Game Developer",
        org: "Brackeys Game Jam",
        summary:
            "7-day jam with two teams across Unreal and Unity; served as main programmer (Unity) and AI programmer (Unreal).",
        highlights: [],
    },
    {
        title: "ScoreSpace Jam #31 (2024)",
        slug: "scorespace-jam-31-2024",
        categories: ["game"],
        timeframe: "2024",
        role: "Solo Game Developer",
        org: "ScoreSpace Jam",
        summary:
            "96-hour solo Unity project to regain Unity momentum before Google x Unity test.",
        highlights: [],
    },
    {
        title: "Ryan Laley Games Game Jam (2024)",
        slug: "ryan-laley-game-jam-2024",
        categories: ["game"],
        timeframe: "2024",
        role: "Game Programmer & Designer",
        org: "Ryan Laley Games Jam",
        summary:
            "30-day Unreal Engine 5 project themed fishing minigame to refresh Unreal fundamentals.",
        highlights: [],
    },
    {
        title: "GMTK Game Jam 2024",
        slug: "gmtk-game-jam-2024",
        categories: ["game"],
        timeframe: "2024",
        role: "Game Programmer & Designer",
        org: "GMTK",
        summary:
            "4-day Unity multiplayer twist on tic-tac-toe.",
        highlights: [],
    },
    {
        title: "Global Game Jam Surabaya (2024)",
        slug: "ggj-surabaya-2024",
        categories: ["game"],
        timeframe: "2024",
        role: "Game Programmer",
        org: "Global Game Jam",
        summary:
            "Offline 38-hour jam themed 'Make Me Laugh'; built a meme-ish Unity game with a four-man team.",
        highlights: [],
    },

    // 2023
    {
        title: "Garena GameJam (2023)",
        slug: "garena-gamejam-2023",
        categories: ["game"],
        timeframe: "2023",
        role: "Game Developer",
        org: "Garena",
        summary:
            "Offline 40-hour jam themed 'Replayability'; created a hardcore stealth game using UE4.",
        highlights: [],
    },
    {
        title: "Candela Game Jam #1 (2023)",
        slug: "candela-game-jam-1-2023",
        categories: ["game"],
        timeframe: "2023",
        role: "Game Developer",
        org: "Candela",
        summary: "Online 48-hour UE5 jam themed 'Unify Miraculous Goals'.",
        highlights: [],
    },
    {
        title: "GAMELOFT Game Designer Connect 3.0 (2023)",
        slug: "gameloft-gdc-3-2023",
        categories: ["game"],
        timeframe: "2023",
        role: "Game Developer",
        org: "Gameloft",
        summary: "One-week online event themed 'One Room', built with Unity.",
        highlights: [],
    },
    {
        title: "Wirausaha Merdeka (2023)",
        slug: "wirausaha-merdeka-2023",
        categories: ["apps", "tech"],
        timeframe: "2023",
        role: "Business (App Development)",
        org: "Wirausaha Merdeka",
        summary:
            "Government-sponsored business program where I designed and created a mobile app prototype.",
        highlights: [],
    },
    {
        title: "PT. eBdesk (2023)",
        slug: "pt-ebdesk-2023",
        categories: ["tech"],
        timeframe: "2023",
        role: "Data Scientist Intern",
        org: "PT. eBdesk",
        summary:
            "6-month internship involving data scraping, analysis, and visualization using Python and tools like Selenium, Gephi, Tableau.",
        highlights: [],
    },

    // 2022
    {
        title: "IGGI GameJam (2022)",
        slug: "iggi-gamejam-2022",
        categories: ["game"],
        timeframe: "2022",
        role: "Game Programmer & Designer",
        org: "IGGI",
        summary:
            "First game jam; chaotic but accelerated my programming growth significantly.",
        highlights: [],
    },
    {
        title: "Valorant Team PENS ESPORT (2022)",
        slug: "valorant-pens-esport-2022",
        categories: ["random"],
        timeframe: "2022",
        role: "Player",
        org: "PENS ESPORT",
        summary:
            "Participated in 5 tournaments; highest achievement was 3rd place in a seven-team tournament.",
        highlights: [],
    },
];

export const skills: Skill[] = [
    // Coding
    { name: "C++", categories: ["game", "tech"], group: "Coding", level: 3 },
    { name: "C#", categories: ["game", "tech"], group: "Coding", level: 3 },
    { name: "Swift", categories: ["apps"], group: "Coding", level: 2 },
    { name: "UE Blueprints", categories: ["game"], group: "Coding", level: 4 },
    { name: "Python", categories: ["tech", "game"], group: "Coding", level: 3 },
    { name: "Dart", categories: ["apps", "tech"], group: "Coding", level: 2 },
    { name: "JavaScript", categories: ["tech"], group: "Coding", level: 2 },

    // Software / Tools
    { name: "Git", categories: ["game", "apps", "tech", "random", "academics"], group: "Source Control", level: 4 },
    { name: "UE4", categories: ["game"], group: "Game Engines", level: 3 },
    { name: "UE5", categories: ["game"], group: "Game Engines", level: 3 },
    { name: "Unity", categories: ["game"], group: "Game Engines", level: 3 },
    { name: "Blender", categories: ["game", "random"], group: "3D Tools", level: 1 },

    // Operating Systems
    { name: "Windows", categories: ["game", "apps", "tech"], group: "Operating System", level: 4 },
    { name: "Linux", categories: ["tech"], group: "Operating System", level: 3 },
    { name: "MacOS", categories: ["apps", "tech"], group: "Operating System", level: 2 },

    // IDEs
    { name: "Visual Studio", categories: ["game", "tech"], group: "IDEs", level: 2 },
    { name: "VSCode", categories: ["game", "apps", "tech"], group: "IDEs", level: 3 },
    { name: "Xcode", categories: ["apps"], group: "IDEs", level: 1 },

    // Productivity
    { name: "Word", categories: ["academics", "tech"], group: "Productivity", level: 3 },
    { name: "Canva", categories: ["game", "apps", "random"], group: "Productivity", level: 4 },
    { name: "Confluence", categories: ["tech"], group: "Productivity", level: 3 },
    { name: "Trello", categories: ["game", "apps", "tech"], group: "Productivity", level: 3 },
    { name: "Notion", categories: ["game", "apps", "tech", "academics"], group: "Productivity", level: 2 },
    { name: "Miro", categories: ["game", "apps", "tech"], group: "Productivity", level: 3 },
];

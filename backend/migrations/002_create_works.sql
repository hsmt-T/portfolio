CREATE TABLE works (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    role TEXT NOT NULL,
    prize TEXT,
    github_url TEXT,
    img_url TEXT
);

CREATE TABLE work_skills (
    work_id INTEGER,
    skill_id INTEGER,
    PRIMARY KEY (work_id, skill_id),
    FOREIGN KEY (work_id) REFERENCES works(id),
    FOREIGN KEY (skill_id) REFERENCES skills(id)
);
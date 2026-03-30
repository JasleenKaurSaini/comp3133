# Lab 08 — Angular Data Binding & Directives
## COMP 3133 Full Stack Development II

---

## How to Run

### Step 1 — Install dependencies
```bash
npm install
```

### Step 2 — Start the app
```bash
ng serve
```

### Step 3 — Open in browser
Go to: http://localhost:4200

---

## What's Included

### Exercise #1 — Structural Directives & Data Binding
- `*ngFor` to loop through heroes list
- `*ngIf` to show hero detail only when selected
- `(click)` event binding to select a hero
- `[class.selected]` property binding for highlight
- `[(ngModel)]` two-way data binding on name input

### Exercise #2 — Custom Pipe (remove-spaces)
- Generated with: `ng generate pipe pipes/remove-spaces`
- Replaces dashes `-` with spaces in hero names
- Applied in template as `{{ hero.name | removeSpaces }}`

### Exercise #3 — Custom Directive (input-format)
- Generated with: `ng generate directive directives/input-format`
- Uses `@HostListener('blur')` to detect when user clicks away
- Converts input text to UPPERCASE on blur
- Applied as `<input appInputFormat />`

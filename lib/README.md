# Data Organization

All hardcoded data has been extracted from components into separate, organized files in the `/lib` folder for better maintainability and reusability.

## Data Files

### 1. `data.ts` (Existing)
**Content:**
- `projects` - Array of project items with title, description, tags, links
- `blogPosts` - Array of blog post items
- `journeyContent` - Content for Developer Journey section

**Used by:**
- `DeveloperJourney.tsx`
- `Projects page` (if applicable)
- `Blog page` (if applicable)

### 2. `hero-data.ts`
**Content:**
- `roles` - Array of typing animation roles
- `socialLinks` - Social media links with icons
- `heroContent` - Greeting, name, description, resume path

**Used by:**
- `Hero.tsx`

### 3. `about-data.ts`
**Content:**
- `stats` - Statistics with animated counters
- `journey` - Timeline journey items
- `techStack` - Technology icons and colors
- `aboutContent` - Section titles and introduction text

**Used by:**
- `About.tsx`

### 4. `skills-data.ts`
**Content:**
- `skillCategories` - Categorized skills with levels and colors
- `learningTechnologies` - Technologies currently learning
- `skillsContent` - Section titles and descriptions

**Used by:**
- `Skills.tsx`

### 5. `contact-data.ts`
**Content:**
- `socialLinks` - Social links with colors
- `contactInfo` - Email, phone, location details
- `contactContent` - Section content and CTA text
- `formLabels` - Form field labels
- `formValidation` - Validation rules and error messages

**Used by:**
- `Contact.tsx`

### 6. `footer-data.ts`
**Content:**
- `socialLinks` - Footer social media links
- `quickLinks` - Navigation links
- `footerContent` - Brand info, description, copyright

**Used by:**
- `Footer.tsx`

## Benefits

✅ **Centralized Data Management** - All content in one place  
✅ **Easy Updates** - Change data without touching components  
✅ **Type Safety** - TypeScript types for all data structures  
✅ **Reusability** - Shared data across multiple components  
✅ **Maintainability** - Cleaner component code focused on UI  
✅ **Scalability** - Easy to add new data or features

## How to Update Content

1. Navigate to the appropriate data file in `/lib`
2. Update the content (titles, descriptions, links, etc.)
3. Types are exported for IDE autocomplete
4. No need to modify component files

## Example

To update your name across the site:
```typescript
// In lib/hero-data.ts
export const heroContent = {
  name: 'Your New Name', // Update here
  // ...
}
```

To add a new skill:
```typescript
// In lib/skills-data.ts
{
  name: 'Frontend',
  skills: [
    // Add new skill here
    { name: 'Svelte', icon: SiSvelte, level: 80, color: '#FF3E00' },
  ]
}
```

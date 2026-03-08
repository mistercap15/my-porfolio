export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  accent: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-scalable-react-applications",
    title: "Building Scalable React Applications with Clean Architecture",
    excerpt:
      "Learn how to structure your React projects for maintainability and scalability using clean architecture principles, custom hooks, and proper separation of concerns.",
    date: "Mar 2, 2026",
    readTime: "8 min read",
    tags: ["React", "Architecture"],
    accent: "border-orange",
    content: `When I first started building React applications professionally, my projects were a tangled mess of components, API calls mixed with UI logic, and state scattered everywhere. Over the past three years, I've refined my approach to structuring React apps, and I want to share what's worked for me.

## The Problem with "Just Components"

Most React tutorials teach you to build components — and that's great for getting started. But when your app grows to 50+ components with complex data flows, you need structure. Without it, you end up with:

- Components that are 500+ lines long doing everything from data fetching to rendering
- Business logic duplicated across multiple components
- State management that's impossible to reason about
- Tests that are painful to write because everything is coupled

## The Architecture I Use

I structure my projects into clear layers:

\`\`\`
src/
├── components/       # Pure UI components (presentational)
├── features/         # Feature-specific modules
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── types.ts
│   └── dashboard/
├── hooks/            # Shared custom hooks
├── services/         # API layer & external integrations
├── utils/            # Pure utility functions
└── types/            # Shared TypeScript types
\`\`\`

## Custom Hooks as the Glue

The real magic is in custom hooks. They serve as the bridge between your UI and your business logic:

\`\`\`tsx
// features/auth/hooks/useAuth.ts
export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const login = async (credentials: LoginCredentials) => {
    const result = await authService.login(credentials);
    setUser(result.user);
    return result;
  };

  return { user, loading, login, logout };
}
\`\`\`

Your components stay clean and focused on rendering:

\`\`\`tsx
function LoginForm() {
  const { login } = useAuth();
  // Just handles the form UI and calls login()
}
\`\`\`

## Key Takeaways

1. **Separate concerns early** — Don't wait until your codebase is a mess
2. **Custom hooks over HOCs** — They're more composable and easier to test
3. **Feature folders over type folders** — Group by feature, not by file type
4. **Keep components dumb** — Move logic into hooks and services
5. **Type everything** — TypeScript catches bugs before your users do

This architecture has served me well across multiple production apps. It's not the only way, but it's a solid foundation that scales.`,
  },
  {
    slug: "redux-to-zustand",
    title: "Why I Switched from Redux to Zustand for State Management",
    excerpt:
      "A practical comparison of Redux and Zustand — how Zustand simplified our codebase, reduced boilerplate, and improved developer experience without sacrificing power.",
    date: "Feb 18, 2026",
    readTime: "6 min read",
    tags: ["React", "State Management"],
    accent: "border-cyan",
    content: `Redux has been the go-to state management solution in React for years. I used it religiously — Redux Toolkit, RTK Query, the whole ecosystem. But after trying Zustand on a side project, I realized I'd been over-engineering my state management for years.

## The Redux Tax

Don't get me wrong — Redux is powerful. But for most applications, you're paying a hefty "complexity tax":

- **Boilerplate**: Even with Redux Toolkit, you need slices, reducers, selectors, and thunks
- **Learning curve**: New team members need to understand actions, reducers, middleware, selectors, normalization...
- **Bundle size**: Redux + RTK adds ~11KB gzipped to your bundle
- **Mental overhead**: Every state change requires thinking about the full Redux flow

## Enter Zustand

Zustand (German for "state") is refreshingly simple. Here's a complete store:

\`\`\`tsx
import { create } from 'zustand';

interface TodoStore {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
}

const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (text) =>
    set((state) => ({
      todos: [...state.todos, { id: crypto.randomUUID(), text, done: false }],
    })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      ),
    })),
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((t) => t.id !== id),
    })),
}));
\`\`\`

That's it. No provider wrapping your app. No dispatch. No action creators. Just a hook.

## What Surprised Me

- **Performance is excellent** — Zustand only re-renders components that use the specific state that changed
- **DevTools work** — There's a devtools middleware that plugs into Redux DevTools
- **Middleware is composable** — persist, immer, devtools — just wrap your store
- **It plays well with others** — Use it alongside React Query for server state

## When to Still Use Redux

Redux still makes sense for very large apps with complex state interactions, or when your team already knows it well. But for new projects, Zustand gives you 90% of the power with 10% of the complexity.

The best code is the code you don't have to write.`,
  },
  {
    slug: "react-native-vs-flutter",
    title: "React Native vs Flutter: A Developer's Honest Take in 2026",
    excerpt:
      "After shipping production apps in both React Native and Flutter, here's my unfiltered comparison on performance, DX, ecosystem, and when to pick each.",
    date: "Jan 25, 2026",
    readTime: "10 min read",
    tags: ["React Native", "Flutter"],
    accent: "border-coral",
    content: `I've shipped 3 production apps in React Native and 1 in Flutter over the past two years. Here's my honest comparison — no framework wars, just practical experience.

## Developer Experience

**React Native** wins here if you're already a web developer. JSX, npm ecosystem, and the ability to share logic with your web app is a massive advantage. Hot reload works well, and the debugging experience with Flipper (or the new debugger) is solid.

**Flutter** has an incredible DX in its own right. Hot reload is lightning fast, and the widget inspector is excellent. But Dart is a language you have to learn, and the "everything is a widget" philosophy can lead to deeply nested code.

**Verdict**: React Native if you're coming from web. Flutter if you're starting fresh.

## Performance

This is where things get nuanced. In 2026, the gap has narrowed significantly:

**React Native** with the New Architecture (Fabric + TurboModules) has closed most of the performance gap. JSI gives you synchronous native calls, and Hermes is a fast JS engine. For 95% of apps, you won't notice a difference.

**Flutter** still has the edge for graphics-heavy apps. The Skia rendering engine gives you consistent 60fps even with complex animations. If you're building something like a game or heavy animation app, Flutter is the safer bet.

**Verdict**: Tie for most apps. Flutter for graphics-heavy use cases.

## Ecosystem & Libraries

**React Native** benefits from the massive npm ecosystem. Need a library? There's probably one (or ten). The community is huge, and most common problems have been solved. The downside: library quality varies wildly, and some packages are abandoned.

**Flutter** has a smaller but more curated ecosystem via pub.dev. Package quality is generally higher, and Google maintains many official packages. But you'll occasionally find gaps, especially for niche native APIs.

**Verdict**: React Native for breadth, Flutter for consistency.

## My Recommendation

- **Choose React Native** if: you have web developers, want code sharing with web, or are building a content-heavy app
- **Choose Flutter** if: you're building a new team, need pixel-perfect custom UI, or are building something visually complex
- **Either works** for: standard CRUD apps, social apps, e-commerce

The best framework is the one your team can ship with confidently.`,
  },
  {
    slug: "optimizing-web-performance",
    title: "Optimizing Web Performance: From 4s to Under 1s Load Time",
    excerpt:
      "A deep dive into the techniques I used to cut load times by 75% — code splitting, lazy loading, image optimization, and caching strategies that actually work.",
    date: "Jan 8, 2026",
    readTime: "7 min read",
    tags: ["Performance", "Next.js"],
    accent: "border-electric",
    content: `Last quarter, I was tasked with improving the performance of a React dashboard that took 4.2 seconds to become interactive. After two weeks of optimization, we got it down to 0.9 seconds. Here's exactly what I did.

## Step 1: Measure Everything

Before touching any code, I ran Lighthouse and Web Vitals to get baseline metrics:

- **LCP (Largest Contentful Paint)**: 3.8s — terrible
- **FID (First Input Delay)**: 180ms — bad
- **CLS (Cumulative Layout Shift)**: 0.15 — needs improvement
- **Total bundle size**: 1.2MB gzipped

## Step 2: Code Splitting (Saved ~40%)

The biggest win was splitting our monolithic bundle. We were importing everything upfront:

\`\`\`tsx
// Before: Everything loaded on initial page
import { HeavyChart } from './components/HeavyChart';
import { DataTable } from './components/DataTable';
import { AdminPanel } from './components/AdminPanel';

// After: Lazy load non-critical components
const HeavyChart = lazy(() => import('./components/HeavyChart'));
const DataTable = lazy(() => import('./components/DataTable'));
const AdminPanel = lazy(() => import('./components/AdminPanel'));
\`\`\`

This alone cut our initial bundle from 1.2MB to 450KB.

## Step 3: Image Optimization (Saved ~25%)

We replaced all \`<img>\` tags with Next.js \`<Image>\` component:

- Automatic WebP/AVIF conversion
- Lazy loading by default
- Responsive srcsets
- Blur placeholder while loading

For icons, we switched from a full icon library (500KB!) to individual SVG imports.

## Step 4: Caching Strategy (Saved ~20%)

We implemented a proper caching strategy:

- **Static assets**: \`Cache-Control: public, max-age=31536000, immutable\`
- **API responses**: SWR with stale-while-revalidate pattern
- **Service Worker**: Pre-cache critical assets for repeat visits

## Step 5: The Small Wins (Saved ~15%)

- Replaced Moment.js (300KB) with date-fns tree-shaking (15KB for what we used)
- Moved analytics scripts to \`defer\`
- Preconnected to API domains with \`<link rel="preconnect">\`
- Used \`content-visibility: auto\` for below-fold sections

## Results

After all optimizations:

- **LCP**: 3.8s → 0.8s
- **FID**: 180ms → 12ms
- **CLS**: 0.15 → 0.02
- **Bundle**: 1.2MB → 280KB

The key lesson: **measure first, optimize second**. Don't guess where the bottlenecks are — the data will surprise you.`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

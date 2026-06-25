import { r as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import "../_libs/sonner.mjs";
import { a as Moon, c as Linkedin, d as Code, f as Briefcase, i as Phone, l as Github, n as Sun, o as MapPin, p as ArrowUpRight, r as Search, s as Mail, t as User, u as Download } from "../_libs/lucide-react.mjs";
import { t as _e } from "../_libs/cmdk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-a4kYeEHX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ScrollReveal({ children, className = "" }) {
	const [isVisible, setIsVisible] = (0, import_react.useState)(false);
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setIsVisible(true);
				observer.unobserve(entry.target);
			}
		}, {
			threshold: .1,
			rootMargin: "0px 0px -50px 0px"
		});
		if (ref.current) observer.observe(ref.current);
		return () => {
			if (ref.current) observer.unobserve(ref.current);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: `transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`,
		children
	});
}
function MagneticCard({ children, className = "" }) {
	const ref = (0, import_react.useRef)(null);
	const [position, setPosition] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	const [opacity, setOpacity] = (0, import_react.useState)(0);
	const handleMouseMove = (e) => {
		if (!ref.current) return;
		const rect = ref.current.getBoundingClientRect();
		setPosition({
			x: e.clientX - rect.left,
			y: e.clientY - rect.top
		});
	};
	const handleMouseEnter = () => setOpacity(1);
	const handleMouseLeave = () => setOpacity(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		onMouseMove: handleMouseMove,
		onMouseEnter: handleMouseEnter,
		onMouseLeave: handleMouseLeave,
		className: `relative overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-accent/50 group ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100",
			style: {
				opacity,
				background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative z-10 p-5 h-full",
			children
		})]
	});
}
function InteractiveAvatar({ src, alt, className = "" }) {
	const ref = (0, import_react.useRef)(null);
	const [transform, setTransform] = (0, import_react.useState)("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
	const handleMouseMove = (e) => {
		if (!ref.current) return;
		const rect = ref.current.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		const centerX = rect.width / 2;
		const centerY = rect.height / 2;
		setTransform(`perspective(1000px) rotateX(${(y - centerY) / centerY * -10}deg) rotateY(${(x - centerX) / centerX * 10}deg) scale3d(1.02, 1.02, 1.02)`);
	};
	const handleMouseLeave = () => {
		setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		ref,
		src,
		alt,
		onMouseMove: handleMouseMove,
		onMouseLeave: handleMouseLeave,
		style: {
			transform,
			transition: "transform 0.1s ease-out"
		},
		className: `shrink-0 rounded-2xl border border-border object-cover shadow-sm ${className}`,
		onError: (e) => {
			e.currentTarget.style.display = "none";
		}
	});
}
function CommandPalette({ resumeUrl, email }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const down = (e) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen((open) => !open);
			}
		};
		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, []);
	const toggleTheme = () => {
		if (document.documentElement.classList.contains("light")) document.documentElement.classList.remove("light");
		else document.documentElement.classList.add("light");
		setOpen(false);
	};
	const jumpTo = (id) => {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
		setOpen(false);
	};
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-start justify-center pt-[20vh] bg-background/80 backdrop-blur-sm",
		onClick: () => setOpen(false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-full max-w-lg rounded-xl border border-border bg-card shadow-2xl overflow-hidden",
			onClick: (e) => e.stopPropagation(),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(_e, {
				className: "flex flex-col w-full h-full text-foreground",
				onKeyDown: (e) => {
					if (e.key === "Escape") setOpen(false);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center border-b border-border px-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Input, {
						autoFocus: true,
						placeholder: "Type a command or search...",
						className: "flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(_e.List, {
					className: "max-h-[300px] overflow-y-auto overflow-x-hidden p-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Empty, {
							className: "py-6 text-center text-sm text-muted-foreground",
							children: "No results found."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(_e.Group, {
							heading: "Navigation",
							className: "px-2 py-1.5 text-xs font-medium text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(_e.Item, {
									onSelect: () => jumpTo("work"),
									className: "flex cursor-pointer items-center rounded-sm px-2 py-2 text-sm aria-selected:bg-accent aria-selected:text-accent-foreground mt-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "mr-2 h-4 w-4" }), "Projects"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(_e.Item, {
									onSelect: () => jumpTo("research"),
									className: "flex cursor-pointer items-center rounded-sm px-2 py-2 text-sm aria-selected:bg-accent aria-selected:text-accent-foreground mt-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, { className: "mr-2 h-4 w-4" }), "Research"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(_e.Item, {
									onSelect: () => jumpTo("skills"),
									className: "flex cursor-pointer items-center rounded-sm px-2 py-2 text-sm aria-selected:bg-accent aria-selected:text-accent-foreground mt-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "mr-2 h-4 w-4" }), "Skills & Education"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(_e.Group, {
							heading: "Actions",
							className: "px-2 py-1.5 text-xs font-medium text-muted-foreground mt-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(_e.Item, {
									onSelect: toggleTheme,
									className: "flex cursor-pointer items-center rounded-sm px-2 py-2 text-sm aria-selected:bg-accent aria-selected:text-accent-foreground mt-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "mr-2 h-4 w-4 hidden dark:block" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "mr-2 h-4 w-4 dark:hidden" }),
										"Toggle Theme"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(_e.Item, {
									onSelect: () => {
										window.open(resumeUrl, "_blank");
										setOpen(false);
									},
									className: "flex cursor-pointer items-center rounded-sm px-2 py-2 text-sm aria-selected:bg-accent aria-selected:text-accent-foreground mt-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-2 h-4 w-4" }), "Download Resume"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(_e.Item, {
									onSelect: () => {
										window.open(`mailto:${email}`, "_blank");
										setOpen(false);
									},
									className: "flex cursor-pointer items-center rounded-sm px-2 py-2 text-sm aria-selected:bg-accent aria-selected:text-accent-foreground mt-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mr-2 h-4 w-4" }), "Send Email"]
								})
							]
						})
					]
				})]
			})
		})
	});
}
var PROFILE = {
	name: "Venkata Sai Kumar Kukkadapu",
	role: "AI & ML Engineer",
	location: "India",
	phone: "+91 9640328677",
	intro: "I design and build digital products that feel obvious in hindsight. Currently focused on web, AI tooling, and side projects that scratch my own itch. I care about craft, simple interfaces, and shipping.",
	email: "venkatasaikumarkukkadapu@gmail.com",
	avatar: "/public/profile.jpg",
	resume: "/public/resume.pdf",
	social: {
		github: "https://github.com/KVSKGT/",
		linkedin: "https://linkedin.com/in/kukkadapu-venkata-sai-kumar/"
	}
};
var PROJECTS = [
	{
		title: "Network Monitoring Dashboard",
		description: "Real-time network traffic analysis and monitoring dashboard with anomaly detection.",
		tags: [
			"Next.js",
			"WebSockets",
			"FastAPI"
		],
		href: "https://github.com/KVSKGT/network-monitoring-dashboard",
		year: "2025"
	},
	{
		title: "People's voice",
		description: "An AI-powered platform for civic issue reporting and management with tech dashboard and analytics.",
		tags: [
			"TypeScript",
			"React",
			"MongoDB"
		],
		href: "https://github.com/KVSKGT/Peoples-voice",
		year: "2025"
	},
	{
		title: "AI Interview MVP",
		description: "An AI-powered mock interview platform that provides real-time voice recognition and intelligent feedback on clarity and structure.",
		tags: [
			"Next.js",
			"AI",
			"LLM"
		],
		href: "https://github.com/KVSKGT/ai-interview-practice",
		year: "2026"
	}
];
var RESEARCH = [{
	title: "Enhancing Trust in Pneumonia Detection: An Explainable Hybrid ResNet-50–Vision Transformer Framework",
	description: "Pneumonia detection model with Gradio interface. Achieved 96.67% accuracy with explainable predictions using GradCAM.",
	tags: [
		"Deep Learning",
		"Explainable AI",
		"GradCAM"
	],
	href: "https://github.com/KVSKGT/Pneumonia-Detection/",
	year: "2026"
}];
var EXPERIENCE = [{
	role: "Student Mentor for DSA",
	org: "Smart Interviews",
	period: "JAN 2026 — MAY 2026"
}];
var TECHNICAL_SKILLS = [
	"Full Stack Development",
	"System Design",
	"Machine Learning",
	"Python",
	"DataBases",
	"Deep Learning",
	"Git & GitHub"
];
var SOFT_SKILLS = [
	"Communication",
	"Public Speaking",
	"Problem Solving",
	"Team Leadership",
	"Time Management",
	"Event Management"
];
var EDUCATION = [{
	degree: "B.Tech CSE – AI & ML",
	school: "VNR VIGNANA JYOTHI INSTITUTE OF ENGINEERING AND TECHNOLOGY",
	period: "2023 — 2027"
}, {
	degree: "Intermediate",
	school: "SRI GURU JUNIOR COLLEGE",
	period: "2021 — 2023"
}];
function ThemeToggle() {
	const [theme, setTheme] = (0, import_react.useState)("dark");
	(0, import_react.useEffect)(() => {
		if (document.documentElement.classList.contains("light")) setTheme("light");
		else setTheme("dark");
	}, []);
	const toggleTheme = () => {
		if (theme === "dark") {
			document.documentElement.classList.add("light");
			setTheme("light");
		} else {
			document.documentElement.classList.remove("light");
			setTheme("dark");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick: toggleTheme,
		className: "inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:border-accent hover:text-accent",
		"aria-label": "Toggle theme",
		children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { size: 14 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { size: 14 })
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground transition-colors duration-300",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandPalette, {
				resumeUrl: PROFILE.resume,
				email: PROFILE.email
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sticky top-0 z-50 w-full border-b border-border bg-background/80 px-6 py-4 backdrop-blur-md md:px-12 lg:px-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full px-6 py-12 md:px-12 lg:px-16 lg:py-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:flex lg:justify-between lg:gap-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:sticky lg:top-24 lg:flex lg:h-[calc(100vh-6rem)] lg:w-1/2 lg:flex-col lg:justify-between lg:py-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden lg:block pb-12",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialLinks, {})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pt-12 lg:w-1/2 lg:py-12 space-y-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
								id: "work",
								label: "Projects",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-1",
									children: PROJECTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectRow, { ...p }, p.title))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
								id: "research",
								label: "Research",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-1",
									children: RESEARCH.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectRow, { ...r }, r.title))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
								id: "skills",
								label: "Skills & Education",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mb-3 font-sans text-xl font-bold tracking-tight text-foreground",
										children: "Technical skills"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-2 sm:grid-cols-3 gap-3",
										children: TECHNICAL_SKILLS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-flex items-center justify-center rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground transition-colors hover:border-accent/50 hover:text-accent text-center shadow-sm",
											children: s
										}, s))
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mb-3 font-sans text-xl font-bold tracking-tight text-foreground",
											children: "Soft skills"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid grid-cols-2 sm:grid-cols-3 gap-3",
											children: SOFT_SKILLS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "inline-flex items-center justify-center rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground transition-colors hover:border-accent/50 hover:text-accent text-center shadow-sm",
												children: s
											}, s))
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mb-3 font-sans text-xl font-bold tracking-tight text-foreground",
											children: "Education"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "space-y-4",
											children: EDUCATION.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticCard, {
												className: "w-full",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "flex flex-col gap-1.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-baseline justify-between gap-4",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-medium text-foreground",
															children: e.degree
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "shrink-0 font-mono text-xs text-muted-foreground",
															children: e.period
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-sm text-muted-foreground",
														children: e.school
													})]
												})
											}, e.degree))
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
								id: "experience",
								label: "Experience",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-4",
									children: EXPERIENCE.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticCard, {
										className: "w-full",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex flex-col gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-baseline justify-between gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-medium text-foreground",
													children: e.role
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "shrink-0 font-mono text-xs text-muted-foreground",
													children: e.period
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm text-muted-foreground",
												children: e.org
											})]
										})
									}, e.role))
								})
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
					className: "mt-24 pb-8 text-center text-sm text-muted-foreground w-full",
					children: "© 2026 Venkata Sai Kumar Kukkadapu. All rights reserved."
				})]
			})
		]
	});
}
function Nav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		className: "relative flex w-full items-center justify-between text-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex shrink-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-2xl font-black text-foreground ",
					children: "Venkata Sai"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-14 text-muted-foreground md:flex text-base",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#work",
						className: "transition-colors hover:text-foreground px-2 py-1",
						children: "Work"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#research",
						className: "transition-colors hover:text-foreground px-2 py-1",
						children: "Research"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#skills",
						className: "transition-colors hover:text-foreground px-2 py-1",
						children: "Skills"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: PROFILE.resume,
						download: true,
						className: "inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2 text-base text-foreground transition-colors hover:border-accent hover:text-accent",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { size: 14 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Resume" })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4 text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: PROFILE.resume,
					download: true,
					className: "inline-flex items-center justify-center rounded-md border border-border bg-card p-1.5 text-foreground transition-colors hover:border-accent hover:text-accent md:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { size: 16 })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {})]
			})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mb-12 lg:mb-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InteractiveAvatar, {
				src: PROFILE.avatar,
				alt: PROFILE.name,
				className: "h-40 w-40 sm:h-56 sm:w-56"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-center gap-2 text-xs text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-1.5 w-1.5 rounded-full bg-accent" }),
					"Available for work · ",
					PROFILE.location
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "font-sans text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl",
				children: [
					PROFILE.name,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-3xl font-bold text-muted-foreground sm:text-4xl",
						children: PROFILE.role
					})
				]
			})] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-6 max-w-lg text-muted-foreground leading-relaxed",
			children: PROFILE.intro
		})]
	});
}
function SocialLinks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconLink, {
				href: `https://mail.google.com/mail/?view=cm&fs=1&to=${PROFILE.email}`,
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 14 }),
				children: PROFILE.email
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconLink, {
				href: `tel:${PROFILE.phone.replace(/\s+/g, "")}`,
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 14 }),
				children: PROFILE.phone
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconLink, {
				href: `https://maps.google.com/?q=${encodeURIComponent(PROFILE.location)}`,
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 14 }),
				children: PROFILE.location
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconLink, {
				href: PROFILE.social.github,
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { size: 14 }),
				children: "GitHub"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconLink, {
				href: PROFILE.social.linkedin,
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { size: 14 }),
				children: "LinkedIn"
			})
		]
	});
}
function Section({ id, label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: "scroll-mt-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollReveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mb-6 font-sans text-3xl font-bold tracking-tight text-foreground",
			children: label
		}), children] })
	});
}
function ProjectRow({ title, description, tags, href, year }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className: "group -mx-3 block rounded-lg px-3 py-4 transition-colors",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticCard, {
			className: "px-2 py-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "font-medium text-foreground",
						children: [title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
							size: 14,
							className: "ml-1 inline -translate-y-px text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-0.5 group-hover:text-accent"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "shrink-0 font-mono text-xs text-muted-foreground",
						children: year
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 flex flex-wrap gap-1.5",
					children: tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full border border-border bg-background px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
						children: t
					}, t))
				})
			]
		})
	});
}
function IconLink({ href, icon, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		target: href.startsWith("http") ? "_blank" : void 0,
		rel: "noreferrer",
		className: "inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5 text-sm text-foreground transition-colors hover:border-accent hover:text-accent",
		children: [icon, children]
	});
}
//#endregion
export { Index as component };

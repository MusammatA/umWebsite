const LOCATIONS = {
  spring2026: "Cantor Lounge, Mathematics",
  fall2025: "Cantor Lounge, Mathematics",
  summer2025: "Summer UMS 2025",
  spring2025: "Cantor Lounge, Mathematics",
  fall2024: "UMS Fall 2024",
  summer2024: "Summer UMS 2024",
  spring2024: "UMS Spring 2024",
  summer2023: "Summer UMS 2023",
  spring2023: "UMS Spring 2023"
};

function summarize(text, fallback) {
  const source = (text || fallback || "").trim();
  if (!source) {
    return "";
  }
  const sentenceMatch = source.match(/.+?[.!?](?=\s|$)/);
  const sentence = (sentenceMatch ? sentenceMatch[0] : source).trim();
  if (sentence.length <= 170) {
    return sentence;
  }
  return `${sentence.slice(0, 167).trim()}...`;
}

function lecture({
  id,
  year,
  semester,
  date,
  title,
  speaker = "",
  topic,
  location,
  description = "",
  blurb = ""
}) {
  const summary = blurb || summarize(description, title);
  return {
    id,
    year: String(year),
    semester,
    date,
    speaker,
    title,
    topic,
    location,
    blurb: summary,
    description: description || summary,
    visual: topic
  };
}

window.lectureArchive = [
  lecture({
    id: "spring-2026-welcome-back-dinner",
    year: 2026,
    semester: "Spring",
    date: "January 21, 2026",
    title: "Welcome Back Dinner!",
    speaker: "UMS",
    topic: "Community",
    location: LOCATIONS.spring2026,
    description: "A welcome-back dinner to start the Spring 2026 term."
  }),
  lecture({
    id: "spring-2026-lacunary-laws",
    year: 2026,
    semester: "Spring",
    date: "January 28, 2026",
    title: "Necessary and Sufficient Conditions for the Lacunary/Hereditary Laws of Large Numbers",
    speaker: "Ioannis Karatzas",
    topic: "Analysis",
    location: LOCATIONS.spring2026,
    description: "The celebrated theorem of Komlos (1967) shows that L1-boundedness is sufficient for a given sequence of functions to contain a subsequence along which (in a \"lacunary\" manner), and along whose every further subsequence (\"hereditarily\"), a strong law of large numbers holds. We identify here slightly weaker, Egorov-type conditions, as not only sufficient in this context, but necessary as well. Conditions both necessary and sufficient are developed also for the hereditary version of the weak law of large numbers for general sequences; as well as for the weak law of large numbers in the context of exchangeable sequences, a long-open question. (Joint work with Istvan Berkes (Budapest) and Walter Schachermayer (Vienna).)"
  }),
  lecture({
    id: "spring-2026-jeopardy",
    year: 2026,
    semester: "Spring",
    date: "February 4, 2026",
    title: "Jeopardy",
    speaker: "UMS",
    topic: "Community",
    location: LOCATIONS.spring2026,
    description: "Let's play Jeopardy!"
  }),
  lecture({
    id: "spring-2026-numbers-are-political",
    year: 2026,
    semester: "Spring",
    date: "February 11, 2026",
    title: "Numbers are Political: a Discussion of Mathematics, Advocacy, and American Politics",
    speaker: "Ashwin Iyengar",
    topic: "Community",
    location: LOCATIONS.spring2026,
    description: "Politics, policy and advocacy are seldom seen as traditional career paths for a mathematician in today's world. This is in part because mathematics is often focused on abstraction, but also reflects the sometimes insular culture of the community formed around mathematical research. Nevertheless, mathematicians throughout history lived rich political lives, and continue to do so. In this talk, I aim to elaborate on ways for mathematicians to get involved in the political process. I will start by providing a potted history of mathematicians who were politically active, and then I will reflect on my experience as the 2024-2025 American Mathematical Society Congressional Fellow, including a discussion of my own path from number theory to policy. I will talk about the role that mathematicians and numerically literate people can play in policy and advocacy more broadly, for example through economics, data science, and data communication. I will also talk about the places where theoretical math actually does intersect policy, including the work of the Metric Geometry and Gerrymandering Group and the history of voting theory. I will conclude by reflecting on the political activism of mathematicians in the past and present (and future?). This talk will be non-technical, and will be aimed at anyone interested in using mathematics in the broader context of their political world."
  }),
  lecture({
    id: "spring-2026-deform-a-donut",
    year: 2026,
    semester: "Spring",
    date: "February 18, 2026",
    title: "How to Deform a Donut Without Tearing it Apart?",
    speaker: "Azelie Picot",
    topic: "Topology",
    location: LOCATIONS.spring2026,
    description: "In this talk, I'll introduce one of my favorite mathematical objects: the mapping class group of a surface. I'll begin by discussing the classification of compact surfaces - including the donut. Then, I'll present some examples of self-homeomorphisms of surfaces, focusing on those generated by what are called Dehn twists. Finally, I'll define the mapping class group and highlight some of its key properties."
  }),
  lecture({
    id: "spring-2026-why-do-we-do-math",
    year: 2026,
    semester: "Spring",
    date: "February 25, 2026",
    title: "Answering the Question 'Why Do We Do Mathematics?' In the Age of AI",
    speaker: "Michael Harris",
    topic: "Community",
    location: LOCATIONS.spring2026,
    description: "My aim in this talk is to encourage students to share their thoughts about the constant stream of news about AI and mathematics. To get the conversation started, I'll present some of the slides from a talk I gave last September at a conference at the Lorentz Center, in the Netherlands, with the title 'Mechanization and Mathematical Research.' The conference brought together a very diverse group of about 40-50 participants: philosophers, computer scientists, historians, and at least one anthropologist, as well as mathematicians from a number of countries, including two Fields Medalists. Participants had very different ideas about what mathematicians can expect from AI, and whether or not it will change mathematics for the better, but everyone agreed that mathematicians need to be paying attention. I'm curious to learn what Columbia undergraduates are saying."
  }),
  lecture({
    id: "spring-2026-data-visualization",
    year: 2026,
    semester: "Spring",
    date: "March 4, 2026",
    title: "Prizes and Perils of Data Visualization",
    speaker: "Noah Bergam",
    topic: "Analysis",
    location: LOCATIONS.spring2026,
    description: "Visualizing a 10,000-point, 1,000-dimensional dataset in a 2-dimensional scatterplot is a bold pursuit. It is also common practice across various scientific fields. In this talk I'd like to convince you of two things: (1) data visualization is important, not just for the dissemination of science but the iterative process of exploratory data analysis and \"interpretability.\" (2) data visualization is hard on multiple levels. (2a) It is hard to formalize. Most notions of \"success\" in the metric embeddings literature are too restrictive and therefore too pessimistic to provide useful models. I will present some work towards improving this state of affairs. (2b) It is hard to do well in practice. I will present some work analyzing and formalizing the failure modes of t-SNE, one of the most prominent data visualization methods. This talk features content from forthcoming papers at ALT 2026 (\"Compressibility Barriers to Neighborhood-Preserving Data Visualization\") and ICLR 2026 (\"t-SNE exaggerates clusters, provably\")."
  }),
  lecture({
    id: "spring-2026-senior-panel",
    year: 2026,
    semester: "Spring",
    date: "March 11, 2026",
    title: "Senior Panel",
    speaker: "UMS",
    topic: "Community",
    location: LOCATIONS.spring2026,
    description: "A senior panel for students to share advice and talk about the major."
  }),
  lecture({
    id: "spring-2026-austin-lei",
    year: 2026,
    semester: "Spring",
    date: "March 25, 2026",
    title: "Lecture to be announced",
    speaker: "Austin Lei",
    topic: "Community",
    location: LOCATIONS.spring2026,
    description: "Lecture details to be announced."
  }),
  lecture({
    id: "spring-2026-ovidiu-savin",
    year: 2026,
    semester: "Spring",
    date: "April 1, 2026",
    title: "Lecture to be announced",
    speaker: "Ovidiu Savin",
    topic: "Community",
    location: LOCATIONS.spring2026,
    description: "Lecture details to be announced."
  }),
  lecture({
    id: "spring-2026-georgy-gaitsgori",
    year: 2026,
    semester: "Spring",
    date: "April 8, 2026",
    title: "Lecture to be announced",
    speaker: "Georgy Gaitsgori",
    topic: "Community",
    location: LOCATIONS.spring2026,
    description: "Lecture details to be announced."
  }),
  lecture({
    id: "spring-2026-soren-galatius",
    year: 2026,
    semester: "Spring",
    date: "April 15, 2026",
    title: "Lecture to be announced",
    speaker: "Soren Galatius",
    topic: "Community",
    location: LOCATIONS.spring2026,
    description: "Lecture details to be announced."
  }),
  lecture({
    id: "spring-2026-surprise-lecture",
    year: 2026,
    semester: "Spring",
    date: "April 22, 2026",
    title: "Surprise Lecture!",
    speaker: "UMS",
    topic: "Community",
    location: LOCATIONS.spring2026,
    description: "A surprise lecture to close out the semester."
  }),
  lecture({
    id: "spring-2026-last-meeting",
    year: 2026,
    semester: "Spring",
    date: "April 29, 2026",
    title: "Last Meeting",
    speaker: "UMS",
    topic: "Community",
    location: LOCATIONS.spring2026,
    description: "The last UMS meeting of the Spring 2026 semester."
  }),

  lecture({
    id: "fall-2025-vector-fields",
    year: 2025,
    semester: "Fall",
    date: "September 10, 2025",
    title: "Vector Fields on Spheres",
    speaker: "Carlos Alvarado",
    topic: "Topology",
    location: LOCATIONS.fall2025,
    description: "We define what a vector field on a sphere is and then we discuss the question of how many linearly independent vector fields we can find."
  }),
  lecture({
    id: "fall-2025-abelian-varieties",
    year: 2025,
    semester: "Fall",
    date: "September 17, 2025",
    title: "Limit of Abelian Varieties",
    speaker: "Dr. Yoonjoo Kim",
    topic: "Algebraic Geometry",
    location: LOCATIONS.fall2025,
    description: "A complex torus is a 2n-dimensional torus (S^1)^2n equipped with an appropriate complex structure. An abelian variety is a special type of complex torus, and it has been an important object since its introduction to algebraic geometry. In this talk, we define these objects more properly and study how they degenerate into a possibly \"singular\" object in algebraic geometry."
  }),
  lecture({
    id: "fall-2025-moduli-stacks",
    year: 2025,
    semester: "Fall",
    date: "September 24, 2025",
    title: "Moduli Spaces and Stacks",
    speaker: "Amal Mattoo",
    topic: "Algebraic Geometry",
    location: LOCATIONS.fall2025,
    description: "In algebraic geometry, a key method for studying families of objects is to find a space that parameterizes them in a geometrically meaningful way. We will explore this fundamental concept of a \"moduli space\" using simple examples from elementary geometry, also mentioning interesting problems that can be solved with such techniques. Then we will see some technical challenges that arise and give intuition for how the abstract notion of \"stacks\" can address them."
  }),
  lecture({
    id: "fall-2025-basic-algebraic-geometry",
    year: 2025,
    semester: "Fall",
    date: "October 1, 2025",
    title: "Basic Algebraic Geometry and Plane Geometry",
    speaker: "Alex Scheffelin",
    topic: "Algebraic Geometry",
    location: LOCATIONS.fall2025,
    description: "As an introduction to the classical algebraic geometry from which modern algebraic geometry has evolved from, we will illustrate several classical theorems about plane curves."
  }),
  lecture({
    id: "fall-2025-symmetric-groups",
    year: 2025,
    semester: "Fall",
    date: "October 8, 2025",
    title: "Representation Theory of Symmetric Groups versus Symmetric Functions",
    speaker: "Fan Zhou",
    topic: "Algebra",
    location: LOCATIONS.fall2025,
    description: "It is a well-known fact that the Grothendieck ring of complex modules over symmetric groups is isomorphic to the ring of symmetric functions; in this talk we will begin by sketching a proof of this fact. Then I will point out the Jacobi-Trudi phenomenon, and introduce the degenerate affine Hecke algebra of rank 1 to realize this as a non-semisimple phenomenon. I will assume some basic familiarity with the representation theory of finite groups."
  }),
  lecture({
    id: "fall-2025-casas-alvero",
    year: 2025,
    semester: "Fall",
    date: "October 15, 2025",
    title: "About the Casas-Alvero Conjecture",
    speaker: "Johan de Jong",
    topic: "Algebra",
    location: LOCATIONS.fall2025,
    description: "I will explain what the conjecture says and show that it holds for infinitely many degrees as was shown by Hans-Christian Graf von Bothmer, Oliver Labs, Josef Schicho, and Christiaan van de Woestijne."
  }),
  lecture({
    id: "fall-2025-game-night",
    year: 2025,
    semester: "Fall",
    date: "October 22, 2025",
    title: "Game Night!",
    speaker: "UMS",
    topic: "Community",
    location: LOCATIONS.fall2025,
    description: "Join us for a night of games!"
  }),
  lecture({
    id: "fall-2025-shape-of-a-drum",
    year: 2025,
    semester: "Fall",
    date: "October 29, 2025",
    title: "You Cannot Hear the Shape of a Drum",
    speaker: "Professor Francesco Lin",
    topic: "Analysis",
    location: LOCATIONS.fall2025,
    description: "The goal of spectral geometry is to understand the relation between the geometry of shapes and the frequencies at which they can vibrate. After providing a general introduction to the subject, I will discuss concrete examples of planar domains (a.k.a. drums) that are isospectral, or, more informally, sound the same."
  }),
  lecture({
    id: "fall-2025-grothendieck-ring",
    year: 2025,
    semester: "Fall",
    date: "November 5, 2025",
    title: "The Grothendieck Ring of Varieties",
    speaker: "James Hotchkiss",
    topic: "Algebraic Geometry",
    location: LOCATIONS.fall2025,
    description: "An algebraic variety is a set of solutions to a system of polynomial equations. There is a simple and amusing way to construct a commutative ring, called the Grothendieck ring of varieties, out of the set of all algebraic varieties. At first glance, the Grothendieck ring appears to be a simple party trick, but I will present a beautiful theorem of Larsen and Lunts showing that it is deeply connected with some old and difficult questions about algebraic varieties."
  }),
  lecture({
    id: "fall-2025-hodge-theory",
    year: 2025,
    semester: "Fall",
    date: "November 12, 2025",
    title: "An introduction to Hodge Theory",
    speaker: "Vidhu Adhihetty",
    topic: "Algebraic Geometry",
    location: LOCATIONS.fall2025,
    description: "Hodge theory is one of the most active areas of algebraic geometry, with applications to many other fields of math as well. In this talk, we define the cohomology of topological spaces, and explain how (under suitable conditions) Hodge theory equips these vector spaces with more structure which better reflects the underlying geometry. Concretely, we will show how we can use Hodge theory to recover elliptic curves from the additional structure on their cohomology."
  }),
  lecture({
    id: "fall-2025-holonomy",
    year: 2025,
    semester: "Fall",
    date: "November 19, 2025",
    title: "From Mechanics, to Algebra, to Geometry: The Notion of Holonomy",
    speaker: "Robert Bryant",
    topic: "Geometry",
    location: LOCATIONS.fall2025,
    description: "Familiar mechanical phenomenon, such as driving and parking a car, rolling a ball, and even the ability of falling cats to land on their feet (usually) are examples of an underlying mathematical concept that, in the 19th century, became known as 'holonomy'. As it became better understood, mathematicians and physicists began to realize that holonomy underlies many different phenomena, from the everyday situations mentioned above to understanding the curvature of space in Einstein's theory of general relativity. Currently, the notion of holonomy arises in both deep mathematical theories and high-energy physical theories, such as string theory and the still-mysterious M-theory, on which many theoretical physicists would like to base a 'theory of everything'. In this talk, after discussing some holonomic phenomena in everyday life, I'll explore their underlying commonality and their appearance in more advanced situations and try to provide some insight into why this idea has turned out to be so fundamental."
  }),
  lecture({
    id: "fall-2025-social-event",
    year: 2025,
    semester: "Fall",
    date: "December 3, 2025",
    title: "Social Event",
    speaker: "UMS",
    topic: "Community",
    location: LOCATIONS.fall2025,
    description: "Let's have a relaxing social event to decompress before finals!"
  }),

  lecture({
    id: "summer-2025-introduction",
    year: 2025,
    semester: "Summer",
    date: "July 17, 2025",
    title: "Introduction",
    speaker: "UMS Officers",
    topic: "Seminar",
    location: LOCATIONS.summer2025,
    description: "We will first introduce Summer UMS and then decide on the logistics, topic, speakers, and general plan for this year's seminar. We will also be taking volunteers to give talks during the meeting. If you would like to give a talk or participate in the seminar in general but cannot attend this week, please email Joseph Rowland McGill."
  }),
  lecture({
    id: "summer-2025-waves-fourier",
    year: 2025,
    semester: "Summer",
    date: "July 24, 2025",
    title: "Waves and Fourier analysis",
    speaker: "Yiming Song",
    topic: "Analysis",
    location: LOCATIONS.summer2025,
    description: "We will motivate Fourier analysis with some fun, classical examples by thinking about waves. Then we will give a preview of some cool results and applications of Fourier analysis."
  }),
  lecture({
    id: "summer-2025-fourier-series",
    year: 2025,
    semester: "Summer",
    date: "July 31, 2025",
    title: "On the Hows and Whys of the Fourier Series",
    speaker: "Jon Kwong",
    topic: "Analysis",
    location: LOCATIONS.summer2025,
    description: "With the knowledge that functions can be decomposed into sums of sinusoids, the next most natural question would be how exactly we should take this sum. We tackle this question for periodic functions by defining the Fourier series and outline an important theorem which ensures the uniqueness of this series. We will also preface the next chapter by intuiting why the Fourier series properly approximates the given function, and in doing so, introduce the notions of convolution and the Dirichlet Kernel."
  }),
  lecture({
    id: "summer-2025-convergence-fourier-series",
    year: 2025,
    semester: "Summer",
    date: "August 7, 2025",
    title: "Convergence of Fourier Series",
    speaker: "Sabrina Yu",
    topic: "Analysis",
    location: LOCATIONS.summer2025,
    description: "With the knowledge of exactly how we can decompose functions into sums of sinusoids, the next most natural question would be does the Fourier series of a function actually converge to the function. And if they do, in what sense? We discuss two different types of convergence, mean-square (global) and pointwise (local), and the conditions under which each holds. We then highlight the limitations of continuity by constructing an explicit example of a continuous, periodic function whose Fourier series diverges at a point."
  }),
  lecture({
    id: "summer-2025-isoperimetric-problem",
    year: 2025,
    semester: "Summer",
    date: "August 14, 2025",
    title: "The Isoperimetric Problem and Formalizing Intuition",
    speaker: "Joseph McGill",
    topic: "Geometry",
    location: LOCATIONS.summer2025,
    description: "We will look at the famous isoperimetric problem and examine how we would approach the problem intuitively. Then we will embark on the process of formalizing our intuition and constructing a 'proper' mathematical proof."
  }),
  lecture({
    id: "summer-2025-fourier-transform-real-line",
    year: 2025,
    semester: "Summer",
    date: "August 21, 2025",
    title: "The Fourier Transform on the Real Line",
    speaker: "Iz Tecum-Ramos",
    topic: "Analysis",
    location: LOCATIONS.summer2025,
    description: "This talk introduces the Fourier transform as an extension of Fourier series to functions defined on the real numbers. We will discuss its basic properties, the Fourier inversion formula, and its role as a fundamental tool in analysis and applied mathematics."
  }),
  lecture({
    id: "summer-2025-fourier-higher-dimensions",
    year: 2025,
    semester: "Summer",
    date: "August 28, 2025",
    title: "Applications of Fourier Transforms in Higher Dimensions",
    speaker: "Eshan Kabir",
    topic: "Analysis",
    location: LOCATIONS.summer2025,
    description: "This talk extends the definition of the Fourier transform into higher dimensions and discusses some of its applications. We will cover two primary examples in the wave equation and X-rays, and will explore how Fourier transforms are used in their proofs and methods."
  }),

  lecture({
    id: "spring-2025-isoperimetric-inequality",
    year: 2025,
    semester: "Spring",
    date: "January 29, 2025",
    title: "The Isoperimetric Inequality",
    speaker: "Simon Brendle",
    topic: "Geometry",
    location: LOCATIONS.spring2025,
    description: "The isoperimetric inequality has a long history in mathematics, going back to the legend of Queen Dido. It is closely related to other important inequalities in analysis, such as the Sobolev inequality and the Brunn-Minkowski inequality. Many different proofs of the isoperimetric inequality have been found. These proofs employ a variety of techniques, including symmetrization, optimal mass transport, the ABP technique, and ideas from the calculus of variations. In this lecture, I will discuss some of these techniques, and explore connections to minimal surface theory."
  }),
  lecture({
    id: "spring-2025-schubert-calculus",
    year: 2025,
    semester: "Spring",
    date: "February 5, 2025",
    title: "Schubert Calculus: A Peek into Algebraic Geometry",
    speaker: "Amal Mattoo",
    topic: "Algebraic Geometry",
    location: LOCATIONS.spring2025,
    description: "Given four general lines in three dimensional space, how many lines intersect all of them? We will explore the field of algebraic geometry, using this question to introduce the theory of Schubert calculus. Along the way we will glimpse key concepts such as moduli spaces, Chow rings, and intersection theory."
  }),
  lecture({
    id: "spring-2025-brave-new-algebra",
    year: 2025,
    semester: "Spring",
    date: "February 12, 2025",
    title: "Brave New Algebra",
    speaker: "Carlos Alvarado",
    topic: "Algebra",
    location: LOCATIONS.spring2025,
    description: "Spaces are complicated objects and so mathematicians started using algebraic gadgets to study them. As time went on, we actually realized that we can use spaces instead to do algebra. This eventually led to the stable category, where instead of doing algebra over the integers, we do algebra over the sphere."
  }),
  lecture({
    id: "spring-2025-game-night",
    year: 2025,
    semester: "Spring",
    date: "February 19, 2025",
    title: "Game Night!",
    speaker: "UMS",
    topic: "Community",
    location: LOCATIONS.spring2025,
    description: "This week, we will be having a game night! Available games include Uno, Exploding Kittens, multidimensional tic-tac-toe, and a standard card deck for your games of choice."
  }),
  lecture({
    id: "spring-2025-social-event",
    year: 2025,
    semester: "Spring",
    date: "February 26, 2025",
    title: "Social Event!",
    speaker: "UMS",
    topic: "Community",
    location: LOCATIONS.spring2025,
    description: "This week will just be a social dinner; we hope this gives you all a chance to decompress from midterm season!"
  }),
  lecture({
    id: "spring-2025-physics-math-puzzles",
    year: 2025,
    semester: "Spring",
    date: "March 5, 2025",
    title: "Physics, Math, and Puzzles",
    speaker: "Matthew Manchung Hase-Liu",
    topic: "Mathematical Physics",
    location: LOCATIONS.spring2025,
    description: "I'll talk about some weird connections between physics, math, and puzzles. This will be interactive!"
  }),
  lecture({
    id: "spring-2025-symplectic-topology",
    year: 2025,
    semester: "Spring",
    date: "March 12, 2025",
    title: "An Introduction to Symplectic Topology",
    speaker: "Dusa McDuff",
    topic: "Symplectic Geometry",
    location: LOCATIONS.spring2025,
    description: "I will describe some of the basics of symplectic topology, and try to explain some kinds of problems that people work on today."
  }),
  lecture({
    id: "spring-2025-spring-break",
    year: 2025,
    semester: "Spring",
    date: "March 19, 2025",
    title: "Spring Break",
    speaker: "UMS",
    topic: "Community",
    location: LOCATIONS.spring2025,
    description: "No lecture this week because of Spring Break."
  }),
  lecture({
    id: "spring-2025-k-theory",
    year: 2025,
    semester: "Spring",
    date: "March 26, 2025",
    title: "Algebraic K-theory and Number Theory",
    speaker: "Gyujin Oh",
    topic: "Number",
    location: LOCATIONS.spring2025,
    description: "Grothendieck introduced K-theory to give meaning to formally subtract one object from another. For example, while you can take the (direct) sum of two vector spaces, there is no natural way to subtract one vector space from another. However, it turns out that simply allowing such formal operations is extremely useful. This notion (along with its \"higher\" analogues) has been generalized to various contexts; in particular, algebraic K-theory studies the K-theory of commutative rings. Surprisingly, despite its topological origins, algebraic K-theory has deep and unexpected connections--some conjectural, some proven--with number theory. I will explain what (algebraic) K-theory is and describe some of these connections."
  }),
  lecture({
    id: "spring-2025-smoothness-4d",
    year: 2025,
    semester: "Spring",
    date: "April 2, 2025",
    title: "Middle-dimensional Topology: Exotic Notions of Smoothness in 4D",
    speaker: "Mike Miller Eismeier",
    topic: "Topology",
    location: LOCATIONS.spring2025,
    description: "Continuous and smooth topology are the same in small dimensions, and the difference between them in high dimensions is governed by algebraic topology. I'll discuss the funny \"middle dimension\" 4, why it's so much less pleasant than its bigger or smaller siblings, and what this has to do with theoretical physics."
  }),
  lecture({
    id: "spring-2025-geometry-dynamics",
    year: 2025,
    semester: "Spring",
    date: "April 9, 2025",
    title: "Interactions between Geometry and Dynamics",
    speaker: "Caglar Uyanik (guest speaker)",
    topic: "Geometry",
    location: LOCATIONS.spring2025,
    description: "A dynamical system is a mathematical framework for studying \"chaos\". This talk is a gentle introduction to the mathematical area of \"dynamics\" and how it interacts with geometry through explicit examples and constructions. We will find and certify chaotic behavior by just looking at matrices!"
  }),
  lecture({
    id: "spring-2025-grid-homology",
    year: 2025,
    semester: "Spring",
    date: "April 16, 2025",
    title: "Grid Homology",
    speaker: "Sally Collins",
    topic: "Topology",
    location: LOCATIONS.spring2025,
    description: "In this talk, we'll explore how to represent mathematical knots - loops in 3-dimensional space that can twist and tangle but never break - in a simple, combinatorial format called a grid diagram. We'll then build an invariant called grid homology, which captures deep geometric and topological information about knots, but can be read directly from our diagram. Along the way, we'll briefly touch on the broader theory of Heegaard Floer homology and see how grid homology offers an accessible gateway into this powerful area of modern mathematics. We'll also discuss how the grid approach is computationally advantageous without sacrificing any of the power of the invariant. This talk is aimed at a general undergraduate audience, with no prior experience in topology, algebra, or knot theory needed."
  }),
  lecture({
    id: "spring-2025-unlikely-intersections",
    year: 2025,
    semester: "Spring",
    date: "April 23, 2025",
    title: "Unlikely Intersections in Arithmetic Geometry",
    speaker: "Vidhu Adhihetty",
    topic: "Number",
    location: LOCATIONS.spring2025,
    description: "In recent years, certain ideas from mathematical logic, namely o-minimality, have found their way into parts of number theory in unexpected ways. In this talk, we will give a brief overview of o-minimality and explain how it can be used to get at cool number-theoretic problems."
  }),
  lecture({
    id: "spring-2025-calculus-of-variations",
    year: 2025,
    semester: "Spring",
    date: "April 30, 2025",
    title: "A Journey through the Calculus of Variations: From Bernoulli to Bernoulli",
    speaker: "Daniela DeSilva",
    topic: "Analysis",
    location: LOCATIONS.spring2025,
    description: "Motivated by the classical Brachistochrone problem, we will explore some basic techniques of the Calculus of Variations and their evolution to deal with more complex minimization questions. We will touch upon free boundary problems which beautifully describe natural phenomena such as the formation of snowflakes or the melting of the ice."
  }),

  lecture({
    id: "fall-2024-introduction-social",
    year: 2024,
    semester: "Fall",
    date: "September 11, 2024",
    title: "Introduction to UMS + Social Event",
    speaker: "UMS",
    topic: "Community",
    location: LOCATIONS.fall2024,
    description: "An opening social event to welcome students to UMS and start the semester."
  }),
  lecture({
    id: "fall-2024-kakeya",
    year: 2024,
    semester: "Fall",
    date: "September 18, 2024",
    title: "The Finite Field Kakeya Problem",
    speaker: "Matthew Hasse-Liu",
    topic: "Combinatorics",
    location: LOCATIONS.fall2024,
    description: "The Kakeya problem is about sets of points in Euclidean space that contain unit line segments in every direction. I'll talk about an easier analogue of this problem over finite fields, which Dvir essentially solved by generating the following fact about polynomials: if f is a non-zero polynomial of degree d whose coefficients lie in a field F, then the number of elements a in F such that F(a)=0 is at most d."
  }),
  lecture({
    id: "fall-2024-langlands",
    year: 2024,
    semester: "Fall",
    date: "September 25, 2024",
    title: "What is the Langlands Program About?",
    speaker: "Michael Harris",
    topic: "Number",
    location: LOCATIONS.fall2024,
    description: "The Langlands program orginally referred to a collection of conjectures proposed by Robert Langlands over 50 years ago to connect a wide range of mathematical concepts and structures, which has been highly influentical ever since. The talk will describe some of the mathematical problems that can be solved with the help of the Langlands program, or that fit under its umbrella. Most of these problems arise in number theory, but the applications, as well as the methods involve geometry, representaion theory, and harmonic analysis; there will even be a glimpse of quantum physics. The talk will also give a scope of how the Langlands program is constantly expanding."
  }),
  lecture({
    id: "fall-2024-cops-robbers",
    year: 2024,
    semester: "Fall",
    date: "October 2, 2024",
    title: "Cops and Robbers",
    speaker: "Cassidy Kao",
    topic: "Combinatorics",
    location: LOCATIONS.fall2024,
    description: "The game of Cops and Robbers is a vertex-to-vertex pursuit game played on a reflexive graph. The goal is for the cop(s) to occupy the same vertex as the robber-if k cops have a strategy that always wins on a particular graph, we call this a k-cop win graph, and if k is the least number of cops needed, the graph has cop number k. The game has been well studied for undirected graphs. We investigate oriented graphs where each edge (or arc) can have one of the two possible orientations. Unlike non-directed graphs, there is no known intrinsic characterization of 1-cop win oriented graphs. In this presentation, we define a relational characterization of the class of cop-win oriented graphs in a manner analogous to the characterization provided by Nowakowski and Winkler (1983)."
  }),
  lecture({
    id: "fall-2024-witten-morse",
    year: 2024,
    semester: "Fall",
    date: "October 2, 2024",
    title: "Witten and Morse Theory",
    speaker: "Kate Mekechuk",
    topic: "Topology",
    location: LOCATIONS.fall2024,
    description: "Morse theory explores the topology of manifolds by studying their critical points. Moreover, one can derive inequalities between the manifold's critical points and its Betti numbers and Euler characteristic. In 1982, Edward Witten discovered how to connect Hodge theory to Morse theory through a supersymmetric analysis of differential forms. This allowed him to construct a new proof of Morse cohomology, a breakthrough in mathematical physics at the time. In this talk, I will present his argument as well as explore the relevant physics analysis that allowed Witten to have his mathematical insights."
  }),
  lecture({
    id: "fall-2024-extended-cup-homology",
    year: 2024,
    semester: "Fall",
    date: "October 2, 2024",
    title: "Extended Cup Homology of S^1 x Sigma_g",
    speaker: "Lisa Faulkner Valiente",
    topic: "Topology",
    location: LOCATIONS.fall2024,
    description: "The Heegaard Floer homology is an important 3-manifold invariant, computed over the rationals by Ozsvath and Szabo and over F2 by Lidman. The work of Jabuka and Mark shows that over integers, the answer should be in terms of cup homology, the homology of an exterior algebra of k-forms where the differential is given by wedging with a certain 3-form w3. Lin and Miller Eismeier compute the result to be \"extended cup homology\", whose differential is given instead by wedging with an odd form w3+w5+... They conjectured that the result should be isomorphic to cup homology, for any 3-form w3. We confirm this conjecture for the circle cross a g-holed torus, completing Jabuka and Mark's calculations. The proof is combinatorial, and uses a decomposition of the exterior algebra into subspaces determined by certain 'pair-free' subsets."
  }),
  lecture({
    id: "fall-2024-quantum-codes",
    year: 2024,
    semester: "Fall",
    date: "October 2, 2024",
    title: "Error-correcting Codes for Quantum Computing",
    speaker: "Milena Harned, Pranav Konda, Felix Liu, Nikhil Mudumbi, Eric Shao, Tony Xiao",
    topic: "Mathematical Physics",
    location: LOCATIONS.fall2024,
    description: "Error-correcting codes for quantum computing are crucial to address the fundamental problem of communication in the presence of noise and imperfections. Audoux used Khovanov homology to define families of quantum codes with desirable properties. In this project, we explored Khovanov homology and some of its many extensions, namely annular and sl(3) homology, in order to generate new families of quantum codes and to establish several properties of codes that arise in this way."
  }),
  lecture({
    id: "fall-2024-generating-functions",
    year: 2024,
    semester: "Fall",
    date: "October 9, 2024",
    title: "A Different Way to Count: Enumerative Combinatorics via Power Series/Generating Functions",
    speaker: "Fan Zhou",
    topic: "Combinatorics",
    location: LOCATIONS.fall2024,
    description: "We will introduce and demonstrate the power of the theory of \"combinatorial species\", a tool which will allow us to reduce a large class of difficult counting problems to operating with generating functions, or formal power series. This theory provides a precise framework to turn \"English sentences\" into equations of generating functions; in fancier language, this is because species provides a categorification of the ring of formal power series as endofunctors of the category of finite sets, or alternatively as set-valued representations of all symmetric groups. We will not spend very much time on fancy language - this talk is accessible to anyone who can count, manipulate polynomials, and maybe do some basic calculus."
  }),
  lecture({
    id: "fall-2024-social-event",
    year: 2024,
    semester: "Fall",
    date: "October 16, 2024",
    title: "Social Event",
    speaker: "UMS",
    topic: "Community",
    location: LOCATIONS.fall2024,
    description: "We have a relaxing social event to decompress during midterms."
  }),
  lecture({
    id: "fall-2024-negative-continued-fractions",
    year: 2024,
    semester: "Fall",
    date: "October 23, 2024",
    title: "A Tour on Negative Continued Fractions",
    speaker: "Nicolas Vilches Reyes",
    topic: "Number",
    location: LOCATIONS.fall2024,
    description: "Negative continued fractions are an exotic object. At a first glance, they seem like a silly modification of a well-known construction with positive signs. However, they are deeply connected with construction in other contexts, such as triangulations of polygons and cyclic quotient singularities. We will delve into their intricate properties and various open questions motivated from algebraic geometry."
  }),
  lecture({
    id: "fall-2024-class-planning-panel",
    year: 2024,
    semester: "Fall",
    date: "October 30, 2024",
    title: "Class Planning Panel",
    speaker: "Upperclassmen",
    topic: "Community",
    location: LOCATIONS.fall2024,
    description: "This week, we are holding a class planning panel, in which some upperclassmen will be answering questions in a panel about courses for the Spring 2025 semester and beyond. We will be answering pre-submitted questions from a Google form, but there will also be time for Q&A and one-on-one chatting with panelists."
  }),
  lecture({
    id: "fall-2024-mean-curvature",
    year: 2024,
    semester: "Fall",
    date: "November 6, 2024",
    title: "The Geometry of Mean Curvature: Minimal Surfaces, Singularity Models, Regularity",
    speaker: "Raphael Tsiamis",
    topic: "Geometry",
    location: LOCATIONS.fall2024,
    description: "The mean curvature of a surface is a notion used in differential geometry to describe the way it is embedded in ambient space. This concept of differential geometry arises in many aspects of nature related to surface tension and the physical interfaces of fluids. The study of mean curvature is tied to that of minimal surfaces, which have mean curvature equal to zero; in a sense, they are in equilibrium under \"surface tension.\" Minimal surfaces enjoy many important properties in terms of analysis, geometry, and topology. They arise in diverse fields, ranging from biology and physics to economics. In this talk, I will describe various key aspects, properties, and questions relating to the mean curvature of surfaces. These will include minimal surfaces, regularity of zero mean curvature varieties, and applications to fields such as economics. Time permitting, we will also introduce mean curvature flow and its singularity models - shrinkers, expanders, and translators."
  }),
  lecture({
    id: "fall-2024-trivia-night",
    year: 2024,
    semester: "Fall",
    date: "November 13, 2024",
    title: "Trivia Night!",
    speaker: "UMS",
    topic: "Community",
    location: LOCATIONS.fall2024,
    description: "This week, UMS will be having a math trivia night! People will form teams of 4-5 people and try to solve quick problems and answer questions about famous theorems, mathematicians, and math history. We hope to see you there!"
  }),
  lecture({
    id: "fall-2024-uniformization",
    year: 2024,
    semester: "Fall",
    date: "November 20, 2024",
    title: "A Peek into Geometric Topology: Uniformization (and maybe Geometrization)",
    speaker: "Casandra Munroe",
    topic: "Topology",
    location: LOCATIONS.fall2024,
    description: "In this talk, we'll go over just one small part of the story (in dimension 2) of what happens when we look at the intersection of geometry and topology. We'll reflect on our favorite geometries, meet some new ones, and above all else, have a lot of pictures. Time permitting, we'll take a look at dimension 3 too!"
  }),
  lecture({
    id: "fall-2024-p-adic-differential-equations",
    year: 2024,
    semester: "Fall",
    date: "December 4, 2024",
    title: "P-adic Differential Equations",
    speaker: "Amadou Bah",
    topic: "Number",
    location: LOCATIONS.fall2024,
    description: "I will introduce p-adic numbers and some of their properties. I will then explain how those properties lead to some remarkable features for the radius on convergence of solutions to p-adic differential equations. If I have time left, I may tell you about an analogous phenomenon for some l-adic local systems in rigid geometry."
  }),

  lecture({
    id: "summer-2024-introduction",
    year: 2024,
    semester: "Summer",
    date: "July 15, 2024",
    title: "Introduction",
    speaker: "UMS Officers",
    topic: "Seminar",
    location: LOCATIONS.summer2024,
    description: "We will first introduce Summer UMS and then decide on the logistics for the next weeks. We will go over some potential textbooks we could cover and then pick one by vote. Every member will then have the opportunity to sign up to give a talk."
  }),
  lecture({
    id: "summer-2024-review-linear-algebra-group-theory",
    year: 2024,
    semester: "Summer",
    date: "July 22, 2024",
    title: "Review of Linear Algebra and Group Theory",
    speaker: "Lisa Faulkner Valiente",
    topic: "Algebra",
    location: LOCATIONS.summer2024,
    description: "We review key definitions and results in linear algebra and group theory that will be relevant when studying representation theory, including eigenvalues and eigenvectors, the definition of a module, normal subgroups and quotient groups, and the first isomorphism theorem. If time permits, we will also give a precise definition of a representation of a group, and an example."
  }),
  lecture({
    id: "summer-2024-properties-of-representations",
    year: 2024,
    semester: "Summer",
    date: "July 29, 2024",
    title: "Properties of Representations",
    speaker: "Yiming Song",
    topic: "Algebra",
    location: LOCATIONS.summer2024,
    description: "We go over some fundamentals of linear algebra before introducing the notion of representations, their basic properties, equivalent representations, kernels, and faithfulness. Then we introduce FG-modules, a concept closely related to representations which will be useful for further study."
  }),
  lecture({
    id: "summer-2024-fg-modules",
    year: 2024,
    semester: "Summer",
    date: "August 5, 2024",
    title: "FG-Modules, Irreducibility, and Regular Representations",
    speaker: "Joseph McGill",
    topic: "Algebra",
    location: LOCATIONS.summer2024,
    description: "After learning about FG modules last week, we want to explore their structure more in depth. This week we will discuss the idea of reducibility, along with specific useful modules such as the permutation modules. Finally we will tie these all together and discuss the group algebra, which gives way to the regular representation."
  }),
  lecture({
    id: "summer-2024-maschkes-theorem",
    year: 2024,
    semester: "Summer",
    date: "August 12, 2024",
    title: "Maschke's Theorem, Schur's Lemma",
    speaker: "Zachary Lihn",
    topic: "Algebra",
    location: LOCATIONS.summer2024,
    description: "We'll continue our study of FG-modules by quickly defining FG-module homomorphisms and their basic properties. We'll then discuss the important result known as Maschke's Theorem, which reduces our study of FG-modules to the irreducible ones. Finally, we'll prove Schur's Lemma, which (time permitting) will allow us to classify the representations of finite abelian groups over the complex numbers."
  }),
  lecture({
    id: "summer-2024-characters-orthogonality",
    year: 2024,
    semester: "Summer",
    date: "August 19, 2024",
    title: "Characters, Orthogonality, and Some Physics",
    speaker: "Andrew Navruzyan",
    topic: "Mathematical Physics",
    location: LOCATIONS.summer2024,
    description: "We introduce and prove fundamental facts about characters and their orthogonality for groups, highlighting the general story on Lie groups. We also introduce Weyl's unitary trick in addition to giving connections of representation theory to general relativity and quantum mechanics. TBD"
  }),

  lecture({
    id: "spring-2024-arithmetic-groups",
    year: 2024,
    semester: "Spring",
    date: "February 7, 2024",
    title: "Arithmetic Groups vs. Mapping Class Groups",
    speaker: "Gyujin Oh",
    topic: "Group Theory",
    location: LOCATIONS.spring2024,
    description: "Integer-coefficient matrix groups, like SL_2(Z) (referred to as arithmetic groups), play crucial roles in number theory, representation theory, and arithmetic algebraic geometry. On the flip side, mapping class groups are key players in low-dimensional topology and Teichmuller theory. Despite their distinct origins, these groups share significant similarities. This talk will explore these analogies."
  }),
  lecture({
    id: "spring-2024-spinors-twistors",
    year: 2024,
    semester: "Spring",
    date: "February 14, 2024",
    title: "Spinors and Twistors",
    speaker: "Peter Woit",
    topic: "Mathematical Physics",
    location: LOCATIONS.spring2024,
    description: "Instead of using vectors to do geometry, in any dimension one can use spinors, which in some sense are \"square roots\" of vectors. In four dimensions these have unusual properties, crucial for understanding four-manifolds in Riemannian geometry, and special relativity in physics. Also in four dimensions, pairs of spinors occur as twistors, with the twistor geometry explaining how conformal symmetry works in four dimensions. I'll try and explain both the mathematics and some of the implications for physics."
  }),
  lecture({
    id: "spring-2024-graph-complexes",
    year: 2024,
    semester: "Spring",
    date: "February 21, 2024",
    title: "Graph Complexes and their Applications",
    speaker: "Soren Galatius",
    topic: "Topology",
    location: LOCATIONS.spring2024,
    description: "Graph complexes are fairly elementary to define. Nevertheless, there are many elementary-sounding questions about them which we cannot answer yet. Since they were introduced in the 1990s, they have made appearances in several seemingly rather different areas of mathematics. I will explain the definition and some applications of these intriguing objects."
  }),
  lecture({
    id: "spring-2024-hilberts-tenth",
    year: 2024,
    semester: "Spring",
    date: "February 28, 2024",
    title: "Hilbert's Tenth Problem",
    speaker: "Alan Zhao",
    topic: "Number",
    location: LOCATIONS.spring2024,
    description: "Yuri Matiyasevich's book \"Hilbert's Tenth Problem\" explains the negative resolution of Hilbert's question of whether or not a general algorithm to solve Diophantine equations. The book produces surprise after surprise in just its first three chapters, and in just its fourth chapter constructs an \"NP-hard\" Diophantine equation: the solvability of any Diophantine equation reduces to this one. This talk will highlight these results, and moreover the completely elementary nature of the proofs involved."
  }),
  lecture({
    id: "spring-2024-introduction-algebraic-geometry",
    year: 2024,
    semester: "Spring",
    date: "March 6, 2024",
    title: "Relations between Geometry and Algebra, or an Introduction to Algebraic Geometry",
    speaker: "Alex Scheffelin",
    topic: "Algebraic Geometry",
    location: LOCATIONS.spring2024,
    description: "Algebraic geometry begins with the observation that algebra and geometry are related. As a child one learns how to graph certain plane curves, equations involving two variables y and x. One sees how the degree of the polynomial determines the general shape of the polynomial, and how various coefficients further control that shape. Here we see the most elementary way in which algebra (the equation) corresponds to geometry (the graph). We will introduce the geometric objects of study, algebraic varieties in a limited fashion, and then we will take some time to compare ring theoretic properties of the associated algebra to geometric properties of the variety. Prerequisites are a first course in ring theory, and some knowledge of the basics of topology."
  }),
  lecture({
    id: "spring-2024-percolation",
    year: 2024,
    semester: "Spring",
    date: "March 20, 2024",
    title: "Percolation, Conformal Invariance, and More",
    speaker: "Milind Hegde",
    topic: "Analysis",
    location: LOCATIONS.spring2024,
    description: "Percolation is one of the most classical and simplest models of probability: fix p in (0,1), look at the integer lattice in d dimensions, and keep every edge with probability p and remove it with probability 1-p (independently across all the edges). From this simple definition arise a multitude of interesting phenomena, including: zero-one laws and a phase transition in the appearance of an infinite connected component, scale-invariance and large scale structure, exceptional times where things which usually occur with probability zero nevertheless can be seen, and conformal invariance. We will introduce and discuss these phenomena, and will not assume any background in formal probability theory."
  }),
  lecture({
    id: "spring-2024-general-relativity",
    year: 2024,
    semester: "Spring",
    date: "April 3, 2024",
    title: "Geometry of Initial Data Set and Properties of Spacetime",
    speaker: "Jingbo Wan",
    topic: "Mathematical Physics",
    location: LOCATIONS.spring2024,
    description: "This talk serves as a brief introduction to two key aspects of Mathematical General Relativity: the Geometry of Initial Data Set and the Properties of Spacetime. We will first introduce some fundamental concepts commonly used by mathematicians and physicists in discussing General Relativity, such as causality, globally hyperbolicity, and energy conditions. Furthermore, we will explore how General Relativity can be approached as an evolutionary problem, or Cauchy problem. Our focus will be on highlighting how the geometry of the initial data set influences the properties of spacetime. Specifically, Penrose-Hawking singularity theorems can be understood within this framework. In these theorems, the basic notion of mean curvature from differential geometry plays an important role."
  }),
  lecture({
    id: "spring-2024-riemann-roch-graphs",
    year: 2024,
    semester: "Spring",
    date: "April 10, 2024",
    title: "Riemann-Roch Theorem for Graphs and Specialization of Divisors from Curves",
    speaker: "Morena Porzio",
    topic: "Algebraic Geometry",
    location: LOCATIONS.spring2024,
    description: "The Riemann-Roch Theorem is a fundamental result in algebraic geometry, more precisely in the theory of algebraic curves. After recalling the statement in the usual context, we will discuss the analogous one in the language of graph theory and its implication for the so-called dollar game. We will conclude by describing how these two settings are related via the specialization map: in particular we will see how to associate a finite graph to a curve."
  }),
  lecture({
    id: "spring-2024-artistic-mathematics",
    year: 2024,
    semester: "Spring",
    date: "April 17, 2024",
    title: "Artistic Mathematics: Truth and Beauty",
    speaker: "Henry Segerman",
    topic: "Geometry",
    location: LOCATIONS.spring2024,
    description: "I'll talk about my work in mathematical visualization: making accurate, effective, and beautiful pictures, models, and experiences of mathematical concepts. I'll discuss what it is that makes a visualization compelling, and show many examples in the medium of 3D printing, as well as some work in virtual reality and spherical video. I'll also discuss my experiences in teaching a project-based class on 3D printing for mathematics students."
  }),

  lecture({
    id: "summer-2023-introduction",
    year: 2023,
    semester: "Summer",
    date: "June 27, 2023",
    title: "Introduction",
    speaker: "Zachary Lihn",
    topic: "Seminar",
    location: LOCATIONS.summer2023,
    description: "We will first introduce Summer UMS and then decide on the logistics for the next weeks. We will go over some potential textbooks we could cover and then pick one by vote. Every member will then have the opportunity to sign up to give a talk."
  }),
  lecture({
    id: "summer-2023-fundamentals-linear-algebra",
    year: 2023,
    semester: "Summer",
    date: "July 11, 2023",
    title: "The Fundamentals of Linear Algebra",
    speaker: "Zachary Lihn",
    topic: "Algebra",
    location: LOCATIONS.summer2023,
    description: "According to William Stein, \"Mathematics is the art of reducing any problem to linear algebra.\" We will start by reviewing the standard definitions and theorems of introductory linear algebra, such as linear spaces and maps, bases, eigenvectors, subspaces, and direct sums and products. If time permits, we will end with a brief discussion of the dual space and its connection with hyperplanes. Throughout, I will give many examples of vector spaces from geometry, analysis, algebra, and more."
  }),
  lecture({
    id: "summer-2023-multilinear-maps",
    year: 2023,
    semester: "Summer",
    date: "July 18, 2023",
    title: "Introducing Multilinear Maps and Tensor Products",
    speaker: "Shiv Yajnik",
    topic: "Algebra",
    location: LOCATIONS.summer2023,
    description: "So far in linear algebra, we have dealt with 1-linear maps between vector spaces. Last week, we introduced the notion of the dual space; as we saw, the basis of the dual space are the maps that identify one of the coordinates. These are examples of multilinear maps, which we will learn more about later as elements of exterior powers of vector spaces. Now we will introduce tensor products; these are fundamental to multilinear algebra because tensor products are an important way in which we can talk about the multi-linearity of maps. They appear as fundamental objects in basically any geometrically-related subject one can think of in mathematics, including algebraic geometry (and consequently algebraic number theory because of the symmetry with algebraic geometry), algebraic topology, functional analysis, differential geometry, and more. Tensor maps and tensor products also appear in many areas of physics, for example rigid body dynamics, quantum mechanics, and general relativity. My talk will essentially cover the rest of Chapter 1 in the Winitzki text. First, I will do a quick review on the dual space. Then, I will spend most of the talk on the construction of the tensor product between two vector spaces. Finally, I will introduce some of the immediate consequences and theorems, and, if time allows, define the exterior product."
  }),
  lecture({
    id: "summer-2023-example-driven-tensor-products",
    year: 2023,
    semester: "Summer",
    date: "July 25, 2023",
    title: "An Example-Driven Overview of Tensor Products",
    speaker: "Ethan Lipson",
    topic: "Algebra",
    location: LOCATIONS.summer2023,
    description: "Last week, we had an abstract introduction to the tensor product through the universal property definition. Next, we'll be seeing some examples of tensor products, elements of these spaces, and operations we can perform on them. We'll also be going over complexification, the Kronecker product, and tensors as multilinear maps."
  }),
  lecture({
    id: "summer-2023-exterior-products",
    year: 2023,
    semester: "Summer",
    date: "August 1, 2023",
    title: "Exterior Products and Area",
    speaker: "Lisa Faulkner Valiente",
    topic: "Algebra",
    location: LOCATIONS.summer2023,
    description: "In this lecture we will introduce a subspace of the tensor product called the exterior product. We will focus on how exterior products can be used to calculate/define determinants and signed areas of parallelotopes."
  }),
  lecture({
    id: "summer-2023-trace",
    year: 2023,
    semester: "Summer",
    date: "August 8, 2023",
    title: "Multilinear Actions and Trace",
    speaker: "Aman Choudhri",
    topic: "Algebra",
    location: LOCATIONS.summer2023,
    description: "In this lecture we will further develop the relationship between linear maps and the exterior power, applying this machinery to explore the notoriously unintuitive concept of the trace of a linear map. Bring a pencil and paper! We'll be proving some of these results for ourselves."
  }),
  lecture({
    id: "summer-2023-duality-trace-determinant",
    year: 2023,
    semester: "Summer",
    date: "August 15, 2023",
    title: "The Duality of Trace and Determinant",
    speaker: "Noah Bergam",
    topic: "Algebra",
    location: LOCATIONS.summer2023,
    description: "The exterior product and the k-linear extension (introduced in the previous two presentations) provide us with a very elegant way to relate the trace and determinant (and envision some of the other matrix invariants that lie \"in between'' them). In this presentation, we further explore the relationship between trace and determinant through the lens of two famous theorems: Liouville's identity and Jacobi's formula. We sketch the proofs of both results, following Winitzki Sec. 4.5."
  }),
  lecture({
    id: "summer-2023-quantum-mechanics",
    year: 2023,
    semester: "Summer",
    date: "August 22, 2023",
    title: "Applications of Advanced Linear Algebra in Quantum Mechanics",
    speaker: "Kayla Pham",
    topic: "Mathematical Physics",
    location: LOCATIONS.summer2023,
    description: "In a culmination of the fundamentals developed through the lecture series, we will discuss the reduction of physical chemistry problems to linear algebra. In this lecture, we'll discuss how linear algebra can be applied to light-matter interactions and even provide a theoretical understanding of how these interactions occur. Topics that will be covered, in both a theoretical and mathematical framework, will include, but are not limited to, transfer matrices and the infamous Schrodinger's equation."
  }),

  lecture({
    id: "spring-2023-hyperplanes",
    year: 2023,
    semester: "Spring",
    date: "February 1, 2023",
    title: "Hyperplanes in Abelian Groups and Twisted Signatures, From Linear Algebra to Monoidal Categories and String Diagrams",
    speaker: "Aiden Sagerman and Zachary Lihn",
    topic: "Algebra",
    location: LOCATIONS.spring2023,
    description: "We investigate the following question: if A and A' are products of finite cyclic groups, when does there exist an isomorphism f:A->A' which preserves the union of coordinate hyperplanes (equivalently, so that f(x) has some coordinate zero if and only if x has some coordinate zero)? We show that if such an isomorphism exists, then A and A' have the same cyclic factors; if all cyclic factors have order larger than 2, the map f is diagonal up to permutation, hence sends coordinate hyperplanes to coordinate hyperplanes. Thus one can recover the coordinate hyperplanes from knowledge of their union. In this talk, I'll give a brief introduction to tensor (monoidal) categories using the important example of finite-dimensional vector spaces. I'll show how a diagrammatic calculus known as string diagrams can be used to understand and generalize many constructions from linear algebra such as the tensor product and trace, and how these can be extended to categories like representations and manifolds."
  }),
  lecture({
    id: "spring-2023-rational-points-rational-curves",
    year: 2023,
    semester: "Spring",
    date: "February 8, 2023",
    title: "Rational Points and Rational Curves on Algebraic Varieties",
    speaker: "Akash Sengupta",
    topic: "Algebraic Geometry",
    location: LOCATIONS.spring2023,
    description: "We will discuss how geometric properties of an algebraic variety determine its arithmetic behaviour such as existence and count of rational points. We will talk about some guiding conjectures and results in this direction."
  }),
  lecture({
    id: "spring-2023-graphs-groups",
    year: 2023,
    semester: "Spring",
    date: "February 15, 2023",
    title: "Using Graphs to Study Groups",
    speaker: "Inbar Klang",
    topic: "Group Theory",
    location: LOCATIONS.spring2023,
    description: "Graphs, which consist of vertices and of edges between them, are well-studied in combinatorics. In this talk, we will discuss some ways in which graphs can be used to study groups. We will focus on the Cayley graph of a group, which is defined using a set of chosen generators of the group, and see how properties of the Cayley graph relate to properties of the group."
  }),
  lecture({
    id: "spring-2023-symplectic-embedding",
    year: 2023,
    semester: "Spring",
    date: "March 1, 2023",
    title: "The Symplectic Embedding Problem and Rational Curves",
    speaker: "Dusa McDuff",
    topic: "Symplectic Geometry",
    location: LOCATIONS.spring2023,
    description: "I will talk about my current project, that is concerned with constructing the kind of holomorphic curves that obstruct symplectic embeddings. I will begin with an introduction to the symplectic world, and try to explain how the obstructions work."
  }),
  lecture({
    id: "spring-2023-integrable-hierarchies",
    year: 2023,
    semester: "Spring",
    date: "March 8, 2023",
    title: "Algebraic Curves and Integrable Hierarchies",
    speaker: "Patrick Lei",
    topic: "Geometry",
    location: LOCATIONS.spring2023,
    description: "In the 1990s, a remarkable correspondence was discovered between the geometry of algebraic curves and infinite-dimensional systems of differential equations. The correspondence has its origin in the study of two-dimensional quantum field theories and is related to many different areas of mathematics. After introducing the relevant objects, I will then state the first result in this story, which was conjectured by Witten and proved by Kontsevich."
  }),
  lecture({
    id: "spring-2023-fourier-series",
    year: 2023,
    semester: "Spring",
    date: "March 29, 2023",
    title: "Probabilistic Ramifications of L^2 Functions' Convergent Fourier Series",
    speaker: "Rahul Ram",
    topic: "Analysis",
    location: LOCATIONS.spring2023,
    description: "Carleson's theorem is a fundamental result establishing the almost everywhere convergence of square integrable functions' Fourier series. In this talk, we'll discuss probabilistic stopping time arguments from a gambler's perspective by utilizing this theorem. I'll give a brief introduction to these ideas in Fourier analysis, their applications, and focus on how this result is the missing piece to the puzzle of the Law of Large Numbers being satisfied for these Fourier sums alongside other probabilistic priniciples."
  }),
  lecture({
    id: "spring-2023-directed-polymers",
    year: 2023,
    semester: "Spring",
    date: "April 5, 2023",
    title: "Directed Polymers in Random Environment: Phase Transitions and Fluctuations",
    speaker: "Weitao Zhu",
    topic: "Analysis",
    location: LOCATIONS.spring2023,
    description: "Directed polymers in random environments (DPRE) have long been an interesting model to study for statistical physicists and mathematicians for their phase transition properties and path behaviours under different environments. In this talk, I will give a brief introduction to this topic and discuss some of the conjectures for these models."
  }),
  lecture({
    id: "spring-2023-free-boundary",
    year: 2023,
    semester: "Spring",
    date: "April 12, 2023",
    title: "Free Boundary Problems",
    speaker: "Daniela De Silva",
    topic: "Analysis",
    location: LOCATIONS.spring2023,
    description: "Starting from the elementary question of what is the shortest distance between two given points in the plane, we will move onto more complex minimization problems from which so-called free boundary problems arise. We will discuss in particular a problem arising in 2-dimensional fluid dynamics and try to understand the fundamental questions of existence, uniqueness, and regularity of solutions to such problems."
  }),
  lecture({
    id: "spring-2023-obstructions-rational-points",
    year: 2023,
    semester: "Spring",
    date: "April 19, 2023",
    title: "Obstructions to the Existence of Rational Points on Algebraic Varieties",
    speaker: "Morena Porzio",
    topic: "Number",
    location: LOCATIONS.spring2023,
    description: "Many techniques have been adopted in order to prove whether or not a system of homogeneous polynomials (over a number field) admits a non-zero solution. We will focus on invariants whose non-vanishing gives an obstruction to the existence of solutions. In particular we will discuss the local-global principle and extension of coefficients, explaining positive results, counterexamples as well as open problems."
  }),
  lecture({
    id: "spring-2023-research-symposium",
    year: 2023,
    semester: "Spring",
    date: "April 28, 2023",
    title: "Spring Research Symposium",
    speaker: "Arjun Kudinoor",
    topic: "Research Showcase",
    location: LOCATIONS.spring2023,
    description: "Seniors and other undergraduates will present their senior theses and other research projects. Come to see what research other students are doing! Topics will include mathematical physics and gauge theory, partial differential equations, dimensionality reduction, financial mathematics, monodromy of covers, and a proposal to optimize NYC's trash collection system."
  })
];

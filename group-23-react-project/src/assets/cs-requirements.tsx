export class Course {
    courseCodes: string[];
    courseNames: string[];
    isOrChoice: boolean;
  
    constructor(courseCodes: string[], courseNames: string[], isOrChoice: boolean) {
      this.courseCodes = courseCodes;
      this.courseNames = courseNames;
      this.isOrChoice = isOrChoice;
    }
  }

export class CourseBlock{
    courses: Course[];

    constructor (courses: Course[]){
        this.courses = courses;
    }
}
  
const csRequirements: CourseBlock[] = [
    new CourseBlock([
    new Course(["CS1200"], ["CS 1200"], false),
    new Course(["CS2500"], ["CS 2500"], false),
    new Course(["CS1800"], ["CS 1800"], false),
    new Course(["PRES_REQ"], ["Pres. Req."], true),
    new Course(["ENGW1111"], ["ENGW 1111"], false)]),

    new CourseBlock([
    new Course(["CS1210"], ["CS 1210"], false),
    new Course(["CS2510", "CS2511"], ["CS 2510", "CS 2511"], false),
    new Course(["SCI_REQ_1"], ["Sci. Req. 1"], false),
    new Course(["MATH1341"], ["MATH 1341"], false),
    new Course(["SOCIAL_REQ"], ["Social Req."], false)]),

    new CourseBlock([
    new Course(["GEN_ELEC_1"], ["Gen. Elec. 1"], false),
    new Course(["Gen_Elec_2"], ["Gen. Elec. 2"], false)]),

    new CourseBlock([
    new Course(["GEN_ELEC_3"], ["Gen. Elec. 3"], false),
    new Course(["Gen_Elec_4"], ["Gen. Elec. 4"], false)]),

    new CourseBlock([
    new Course(["MATH1365"], ["MATH 1365"], false),
    new Course(["EECE2310", "EECE2311"], ["EECE 2310", "EECE 2311"], false),
    new Course(["CS2810"], ["CS 2810"], false),
    new Course(["CS3500", "CS3501"], ["CS 3500", "CS 3501"], false)]),
    
    new CourseBlock([
    new Course(["COOP_1_1"], ["Co-op 1"], false)]),

    new CourseBlock([
    new Course(["COOP_1_2"], ["Co-op 1"], false)]),

    new CourseBlock([
    new Course(["GEN_ELEC_5"], ["Gen. Elec. 5"], false),
    new Course(["Gen_Elec_6"], ["Gen. Elec. 6"], false)]),

    new CourseBlock([
    new Course(["SCI_REQ_2"], ["Sci. Req. 2"], false),
    new Course(["CS3000"], ["CS 3000"], false),
    new Course(["CS3650"], ["CS 3650"], false),
    new Course(["CONC_1"], ["Concentration req 1"], false)]),

    new CourseBlock([
    new Course(["COOP_2_1"], ["Co-op 2"], false)]),

    new CourseBlock([
    new Course(["COOP_2_2"], ["Co-op 2"], false)]),

    new CourseBlock([
    new Course(["KHOURY_ELEC_1"], ["Khoury Elective 1"], false),
    new Course(["KHOURY_ELEC_2"], ["Khoury Elective 2"], false)]),

    new CourseBlock([
    new Course(["CS3800"], ["CS 3800"], false),
    new Course(["CS4500/4530"], ["CS 4500/4530"], true),
    new Course(["SEC_REQ"], ["Security Req."], false),
    new Course(["CONC_2"], ["Concentration req 2"], false)]),

    new CourseBlock([
    new Course(["CONC_3"], ["Concentration req 3"], false),
    new Course(["CONC_4"], ["Concentration req 4"], false),
    new Course(["ENGW3302/3315"], ["ENGW3302/3315"], false),
    new Course(["GEN_ELEC_7"], ["Gen. Elec. 7"], false)]),

    new CourseBlock([
        new Course(["N/A"], ["N/A"], false),
        new Course(["N/A"], ["N/A"], false),
        new Course(["N/A"], ["N/A"], false),
        new Course(["N/A"], ["N/A"], false)]),

    new CourseBlock([
        new Course(["N/A"], ["N/A"], false),
        new Course(["N/A"], ["N/A"], false),
        new Course(["N/A"], ["N/A"], false),
        new Course(["N/A"], ["N/A"], false)]),
];

/*const csRequirements = [
    CS1200: "CS 1200",
    CS1210: "CS 1210",
    CS1800_CS1802: {
        CS1800: "CS 1800",
        CS1802: "CS 1802"
    },
    CS2500_CS2501: {
        CS2500: "CS 2500",
        CS2501: "CS 2501"
    },
    CS2510_CS2511: {
        CS2510: "CS 2510",
        CS2511: "CS 2511"
    },
    CS2810: "CS 2810",
    CS3000: "CS 3000",
    CS3500_CS3501: {
        CS3500: "CS 3500",
        CS3501: "CS 3501"
    },
    CS3650: "CS 3650",
    CS3800: "CS 3800",
    CHOICE_CS4500_CS4530: {
        CS4500: "CS 4500",
        CS4530: "CS 4530"
    },
    CHOICE_CY: {
        CY2550: "CY 2550",
        CY3740: "CY 3740",
        CY4740: "CY 4740"
    },
    CHOICE_PRESENTATION: {
        COMM1112: "COMM 1112",
        COMM1113: "COMM 1113",
        COMM1210: "COMM 1210",
        COMM1511: "COMM 1511",
        THTR1125: "THTR 1125",
        THTR1130: "THTR 1130",
        THTR1180: "THTR 1180",
        THTR2345: "THTR 2345"
    },
    CHOICE2_KHOURY_ELECTIVES: {
        KHOURY_ELECTIVE_1: "Choose any 4-hour Khoury Elective",
        KHOURY_ELECTIVE_2: "Choose any 4-hour Khoury Elective"
    },
    CHOICE4_CONCENTRATION_ELECTIVES: {
        CONCENTRATION_ELECTIVE_1: "Choose any 4-hour Concentration Elective",
        CONCENTRATION_ELECTIVE_2: "Choose any 4-hour Concentration Elective",
        CONCENTRATION_ELECTIVE_3: "Choose any 4-hour Concentration Elective",
        CONCENTRATION_ELECTIVE_4: "Choose any 4-hour Concentration Elective"
    },
    MATH1341: "MATH 1341",
    MATH1365: "MATH 1365",
    CHOICE_SOCIAL_ISSUES_ :{
        AFAM2600: "AFAM 2600",
        CY4170: "CY 4170",
        CY5240: "CY 5240",
        ENGL2150: "ENGL 2150",
        HIST2220: "HIST 2220",
        INSH2102: "INSH 2102",
        IS1300PHIL1300: "IS 1300/PHIL 1300",
        PHIL1145: "PHIL 1145",
        SOCL1280: "SOCL 1280",
        SOCL2485: "SOCL 2485",
        SOCL4528: "SOCL 4528",
    },
    EECE2310_EECE2311: {
        EECE2310: "EECE 2310",
        EECE2311: "EECE 2311"
    },
    CHOICE2_SCIENCE_REQUIREMENT: {
        SCIENCE_REQUIREMENT_1: "Choose any 4-hour Science Requirement and relevant co-requisite",
        SCIENCE_REQUIREMENT_2: "Choose any 4-hour Science Requirement and relevant co-requisite"
    },
    ENGW1111: "ENGW 1111",
    CHOICE_ADV_WRITING: {
        ENGW3302: "ENGW 3302",
        ENGW3315: "ENGW 3315",
    },  
]*/

const csRequirementsHTML = `<!doctype html>
<html class="no-js" xml:lang="en" lang="en" dir="ltr">

<head>
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<title>Computer Science, BSCS | Northeastern University Academic Catalog</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta property="og:site_name" content="Northeastern University Academic Catalog" />
<meta name="description" content="This page describes the requirements of the Bachelor of Science in Computer Science." />
<meta name="keywords" content="BSCS-CSCI, computer science, data, algorithms, computation, networks, systems" />
<link rel="search" type="application/opensearchdescription+xml"
			href="/search/opensearch.xml" title="Catalog" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
<link href="/favicon.ico" rel="shortcut icon" />
<link rel="stylesheet" type="text/css" href="/css/reset.css" />
<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i">
<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,700i,900">
<link rel="stylesheet" type="text/css" href="/fonts/font-awesome/font-awesome.min.css" />
<link rel="stylesheet" type="text/css" href="/css/courseleaf.css?v=1693109880000" />
<link rel="stylesheet" type="text/css" href="/css/screen.css?v=1693109880000" media="screen" />
<link rel="stylesheet" type="text/css" href="/css/print.css?v=1693109880000" media="print" />
<script type="text/javascript" src="/js/jquery.js"></script>
<script type="text/javascript" src="/js/lfjs.js"></script>
<script type="text/javascript" src="/js/lfjs_any.js"></script>
<link rel="stylesheet" type="text/css" href="/js/lfjs.css?v=1693109888000" />
<script type="text/javascript" src="/js/courseleaf.js?v=1693109888000"></script>
<script type="text/javascript" src="/js/custom.js?v=1693109888000"></script>





<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WGQLLJ');</script>

</head>



<body class="">

<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WGQLLJ"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>





<nav aria-label="Skip content menu" class="accessible">
	<div class="accessible-menu">
		<ul>
			<li><a href="#contentarea" rel="section">Skip to Content</a></li>
			<li><a href="/azindex/">AZ Index</a></li>
			<li><a href="/">Catalog Home</a></li>
			<li><a href="https://northeastern.edu">Institution Home</a></li>
		</ul>
	</div>
</nav>

<header id="header">
    <div class="wrap">
        
        <div id="logo">
            <a href="https://www.northeastern.edu/">
                <img src="/images/logo.png" alt="Northeastern University" />
            </a>
        </div>

        <div id="client-search">
            <button type="button" id="client-search-toggle" aria-controls="client-search-content" aria-expanded="false">
                <img src="/images/search.svg" alt="" aria-hidden="true">
                <span class="sr-only">Toggle Search Visibility</span>
            </button>
            <div id="client-search-content" class="search" aria-hidden="true" aria-controls="client-search-content" aria-expanded="true">
                <button type="button" id="client-search-close">
                    <span class="sr-only">Close Search</span>
                    <img src="/images/close.svg" alt="" aria-hidden="true"/>
                </button>
                <div class="search" id="cat-search">
                   <form action="/search/">
                        <label for="cat-search-term" class="sr-only">Search catalog</label>
                        <input class="search-field" type="text" name="search" id="cat-search-term" placeholder="Search Catalog" />
                        <button class="search-button" type="submit" id="client-search-submit">Go</button>
<!-- <input type="hidden" name="caturl" value="/undergraduate" /> -->
                    </form>
                    <hr>
                </div>
            </div>        
        </div>
    </div><!-- .wrap -->
    
    <div class="dec">
        <div class="wrap">
            <h2>
                <a href="">
                    Academic Catalog 2023-2024
                </a>
            </h2>
        </div>
    </div>
    
    <nav id="breadcrumb" aria-label="Breadcrumbs">
        <div class="wrap">
<ul><li><a href="/">Home</a><span class="crumbsep">›</span></li><li><a href="/undergraduate/">Undergraduate</a><span class="crumbsep">›</span></li><li><a href="/undergraduate/computer-information-science/">Khoury&nbsp;College&nbsp;of&nbsp;Computer&nbsp;Sciences</a><span class="crumbsep">›</span></li><li><a href="/undergraduate/computer-information-science/computer-science/">Computer&nbsp;Science</a><span class="crumbsep">›</span></li><li><span class="active">Computer Science, BSCS</span></li></ul>
        </div>
    </nav>
    
    <div id="site-title">
        <div class="wrap">
            <h1>
                Computer Science, BSCS
            </h1>
        </div>
    </div>
</header>


<section id="content-container">
   <div class="wrap">
      <div id="col-nav">
         <button id="sidebar-toggle" aria-expanded="false" data-toggle="#sidebar">
            <i class="fa fa-bars" aria-hidden="true"></i>
            <span>2023-2024 Edition</span>
         </button>
         <aside id="sidebar">
            <div class="sidebar-item">
               <h2 id="edition" class="sidebar-header"><a href="/">2023-2024 Edition</a></h2>
               <nav id="cl-menu" aria-label="Primary">
<ul class="nav levelzero" id="/">
	<li class="active isparent"><a href="/undergraduate/">Undergraduate</a>
	<ul class="nav levelone" id="/undergraduate/">
		<li class="isparent"><a href="/undergraduate/admission/">Admission</a></li>
		<li class="isparent"><a href="/undergraduate/information-entering-students/">Information for Entering Students</a></li>
		<li class="isparent"><a href="/undergraduate/expenses/">Financial Information</a></li>
		<li class="isparent"><a href="/undergraduate/academic-policies-procedures/">Academic Policies and Procedures</a></li>
		<li class="isparent"><a href="/undergraduate/university-academics/">University Academics</a></li>
		<li class="isparent"><a href="/undergraduate/arts-media-design/">College of Arts, Media and Design</a></li>
		<li class="isparent"><a href="/undergraduate/business/">D'Amore-&#8203;McKim School of Business</a></li>
		<li class="active isparent"><a href="/undergraduate/computer-information-science/">Khoury College of Computer Sciences</a>
		<ul class="nav leveltwo" id="/undergraduate/computer-information-science/">
			<li class="active isparent"><a href="/undergraduate/computer-information-science/computer-science/">Computer Science</a>
			<ul class="nav levelthree" id="/undergraduate/computer-information-science/computer-science/">
				<li class="active self"><a href="#" onclick="return false;">Computer Science, BSCS</a></li>
				<li><a href="/undergraduate/computer-information-science/computer-science/bacs/">Computer Science, BACS</a></li>
				<li><a href="/undergraduate/computer-information-science/computer-science/computing-law-bs/">Computing and Law, BS</a></li>
				<li><a href="/undergraduate/computer-information-science/computer-science/minor/">Computer Science, Minor</a></li>
			</ul>
			</li>
			<li class="isparent"><a href="/undergraduate/computer-information-science/cybersecurity/">Cybersecurity</a></li>
			<li class="isparent"><a href="/undergraduate/computer-information-science/data-science/">Data Science</a></li>
			<li class="isparent"><a href="/undergraduate/computer-information-science/computer-information-science-combined-majors/">Khoury Combined Majors</a></li>
			<li><a href="/undergraduate/computer-information-science/accelerated-bachelor-graduate-degree-programs/">Accelerated Bachelor/&#8203;Graduate Degree Programs</a></li>
		</ul>
		</li>
		<li class="isparent"><a href="/undergraduate/engineering/">College of Engineering</a></li>
		<li class="isparent"><a href="/undergraduate/health-sciences/">Bouvé College of Health Sciences</a></li>
		<li class="isparent"><a href="/undergraduate/science/">College of Science</a></li>
		<li class="isparent"><a href="/undergraduate/social-sciences-humanities/">College of Social Sciences and Humanities</a></li>
		<li><a href="https://acrobat.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3A06353ee6-2bf4-3871-851f-0fcc3cdafe13/">Student Handbook</a></li>
		<li><a href="/undergraduate/faculty/">Faculty</a></li>
		<li class="isparent"><a href="/undergraduate/appendix/">General Information</a></li>
	</ul>
	</li>
	<li class="isparent"><a href="/professional-studies/">College of Professional Studies Undergraduate</a></li>
	<li class="isparent"><a href="/graduate/">Graduate</a></li>
	<li class="isparent"><a href="/course-descriptions/">Course Descriptions</a></li>
	<li><a href="/addendum/">Addendum</a></li>
	<li><a href="/archive/">Catalog Archives</a></li>
</ul>
               </nav>
            </div>

            <button id="print-btn" href="#print-dialog" onclick="showPrintDialog(); return false;">
               <i class="fa fa-print" aria-hidden="true"></i> Print Options
            </button>
         </aside>
      </div> <!-- end col-nav -->
      <div id="col-content">


			<main id="contentarea">
			



<script type="text/javascript">
//<![CDATA[
	var defshow = "text";
	var bodycontainer = "#body";
	var validhashes = ",text,programrequirementstext,planofstudytext,";

if(window.location.hash.length) {
	var hash = cleanHash(window.location.hash);
	if(validhashes.indexOf("," + hash + ",") != -1)
		defshow = hash;	
}
var ss = document.styleSheets;
var workss = null;
for(var i=0; i < ss.length; i++) {
	var currmedia = "";
	if (typeof ss[i].media == "string") 
		currmedia = ss[i].media
	else if (typeof ss[i].media == "object" && ss[i].media.mediaText) 
		currmedia = ss[i].media.mediaText;
	
	if((currmedia == "screen" || currmedia == "all") && (ss[i].href.indexOf("/") == 0 || ss[i].href.indexOf(document.location.host) >= 0)) {
		workss = ss[i];
		break;	
	}
}
if(workss && workss.insertRule) {
	workss.insertRule(".tab_content { display: none; }", workss.cssRules.length)
	workss.insertRule(".sectionheader { display: none; }", workss.cssRules.length)
	workss.insertRule("#" + defshow + "container { display: block; }", workss.cssRules.length)
} else if(workss && workss.addRule) {
	workss.addRule(".tab_content", "display: none");
	workss.addRule(".sectionheader", "display: none");
	workss.addRule("#" + defshow + "container", "display: block");
}
else {
	if (window.console)
		window.console.log('screen.css <link> needs attribute media="screen"');
}
//]]>
</script>
	<nav id="tabs" aria-label="Page content tabs">
		<ul class="clearfix" role="tablist">
			<li id="texttab" role="presentation">
<a href="#textcontainer" role="tab" aria-controls="textcontainer" onclick="return showSection('text');">Overview</a></li>
			<li id="programrequirementstexttab" role="presentation">
<a href="#programrequirementstextcontainer" role="tab" aria-controls="programrequirementstextcontainer" onclick="return showSection('programrequirementstext');" >Program Requirements</a></li>
			<li id="planofstudytexttab" role="presentation">
<a href="#planofstudytextcontainer" role="tab" aria-controls="planofstudytextcontainer" onclick="return showSection('planofstudytext');" >Plan of Study</a></li>
		</ul>
	</nav>

<div id="textcontainer" class="page_content tab_content" role="tabpanel" aria-labelledby="texttab" aria-hidden="true">

<p>The Bachelor of Science in Computer Science focuses on the fundamentals of program design, software development, computer organization, systems and networks, theories of computation, principles of languages, and advanced algorithms and data. </p></div><!--end #textcontainer -->

			<div id="programrequirementstextcontainer" class="page_content tab_content" role="tabpanel" aria-labelledby="programrequirementstexttab" aria-hidden="true">
				<a name="programrequirementstext"></a> <p>Complete all courses listed below unless otherwise indicated. Also complete any corequisite labs, recitations, clinicals, or tools courses where specified and complete any additional courses needed beyond specific college and major requirements to satisfy graduation credit requirements.</p> <h2>Universitywide Requirements</h2> <p>All undergraduate students are required to complete the <a href="/undergraduate/university-academics/university-wide-requirements/">Universitywide Requirements</a>.</p> <h2>NUpath Requirements</h2> <p>All undergraduate students are required to complete the <a href="/undergraduate/university-academics/nupath/">NUpath Requirements</a>.</p>
<h2>Computer Science Requirements</h2> <table class="sc_courselist"> <caption class="hidden noscript">Course List</caption> <colgroup> <col class="codecol"/> <col class="titlecol"/> <col align="char" char="." class="hourscol"/> </colgroup> <thead> <tr class="hidden noscript"> <th scope="col">Code</th> <th scope="col">Title</th> <th scope="col" class="hourscol">Hours</th> </tr> </thead> <tbody> <tr class="even areaheader  firstrow"><td colspan="2"><span class="courselistcomment areaheader ">Computer Science Overview</span></td><td class="hourscol"></td></tr> <tr class="odd"><td class="codecol"><a href="/search/?P=CS%201200" title="CS 1200" class="bubblelink code" onclick="return showCourse(this, 'CS 1200');">CS 1200</a></td><td>First Year Seminar</td><td class="hourscol">1</td></tr> <tr class="even"><td class="codecol"><a href="/search/?P=CS%201210" title="CS 1210" class="bubblelink code" onclick="return showCourse(this, 'CS 1210');">CS 1210</a></td><td>Professional Development for Khoury Co-op</td><td class="hourscol">1</td></tr> <tr class="odd areaheader "><td colspan="2"><span class="courselistcomment areaheader ">Computer Science Fundamental Courses</span></td><td class="hourscol"></td></tr> <tr class="even"><td class="codecol"><a href="/search/?P=CS%201800" title="CS 1800" class="bubblelink code" onclick="return showCourse(this, 'CS 1800');">CS 1800</a><br/><span style="margin-left:20px;" class="blockindent">and <a href="/search/?P=CS%201802" title="CS 1802" class="bubblelink code" onclick="return showCourse(this, 'CS 1802');">CS 1802</a></span></td><td>Discrete Structures<br/><span style="margin-left:20px;" class="blockindent">and Seminar for CS 1800</span></td><td class="hourscol">5</td></tr> <tr class="odd"><td class="codecol"><a href="/search/?P=CS%202500" title="CS 2500" class="bubblelink code" onclick="return showCourse(this, 'CS 2500');">CS 2500</a><br/><span style="margin-left:20px;" class="blockindent">and <a href="/search/?P=CS%202501" title="CS 2501" class="bubblelink code" onclick="return showCourse(this, 'CS 2501');">CS 2501</a></span></td><td>Fundamentals of Computer Science 1<br/><span style="margin-left:20px;" class="blockindent">and Lab for CS 2500</span></td><td class="hourscol">5</td></tr> <tr class="even"><td class="codecol"><a href="/search/?P=CS%202510" title="CS 2510" class="bubblelink code" onclick="return showCourse(this, 'CS 2510');">CS 2510</a><br/><span style="margin-left:20px;" class="blockindent">and <a href="/search/?P=CS%202511" title="CS 2511" class="bubblelink code" onclick="return showCourse(this, 'CS 2511');">CS 2511</a></span></td><td>Fundamentals of Computer Science 2<br/><span style="margin-left:20px;" class="blockindent">and Lab for CS 2510</span></td><td class="hourscol">5</td></tr> <tr class="odd"><td class="codecol"><a href="/search/?P=CS%202810" title="CS 2810" class="bubblelink code" onclick="return showCourse(this, 'CS 2810');">CS 2810</a></td><td>Mathematics of Data Models</td><td class="hourscol">4</td></tr> <tr class="even areaheader "><td colspan="2"><span class="courselistcomment areaheader ">Computer Science Required Courses</span></td><td class="hourscol"></td></tr> <tr class="odd"><td class="codecol"><a href="/search/?P=CS%203000" title="CS 3000" class="bubblelink code" onclick="return showCourse(this, 'CS 3000');">CS 3000</a></td><td>Algorithms and Data</td><td class="hourscol">4</td></tr> <tr class="even"><td class="codecol"><a href="/search/?P=CS%203500" title="CS 3500" class="bubblelink code" onclick="return showCourse(this, 'CS 3500');">CS 3500</a><br/><span style="margin-left:20px;" class="blockindent">and <a href="/search/?P=CS%203501" title="CS 3501" class="bubblelink code" onclick="return showCourse(this, 'CS 3501');">CS 3501</a></span></td><td>Object-Oriented Design<br/><span style="margin-left:20px;" class="blockindent">and Lab for CS 3500</span></td><td class="hourscol">5</td></tr> <tr class="odd"><td class="codecol"><a href="/search/?P=CS%203650" title="CS 3650" class="bubblelink code" onclick="return showCourse(this, 'CS 3650');">CS 3650</a></td><td>Computer Systems</td><td class="hourscol">4</td></tr> <tr class="even"><td class="codecol"><a href="/search/?P=CS%203800" title="CS 3800" class="bubblelink code" onclick="return showCourse(this, 'CS 3800');">CS 3800</a></td><td>Theory of Computation</td><td class="hourscol">4</td></tr> <tr class="odd"><td class="codecol"><a href="/search/?P=CS%204500" title="CS 4500" class="bubblelink code" onclick="return showCourse(this, 'CS 4500');">CS 4500</a></td><td>Software Development</td><td class="hourscol">4</td></tr> <tr class="orclass odd"><td class="codecol orclass">or <a href="/search/?P=CS%204530" title="CS 4530" class="bubblelink code" onclick="return showCourse(this, 'CS 4530');">CS 4530</a></td><td colspan="2"> Fundamentals of Software Engineering</td></tr> <tr class="even areaheader "><td colspan="2"><span class="courselistcomment areaheader ">Security Required Course</span></td><td class="hourscol"></td></tr> <tr class="odd"><td colspan="2"><span class="courselistcomment">Complete one of the following:</span></td><td class="hourscol">4</td></tr> <tr class="even"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=CY%202550" title="CY 2550" class="bubblelink code" onclick="return showCourse(this, 'CY 2550');">CY 2550</a></div></td><td>Foundations of Cybersecurity</td><td class="hourscol"></td></tr> <tr class="odd"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=CY%203740" title="CY 3740" class="bubblelink code" onclick="return showCourse(this, 'CY 3740');">CY 3740</a></div></td><td>Systems Security</td><td class="hourscol"></td></tr> <tr class="even"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=CY%204740" title="CY 4740" class="bubblelink code" onclick="return showCourse(this, 'CY 4740');">CY 4740</a></div></td><td>Network Security</td><td class="hourscol"></td></tr> <tr class="odd areaheader "><td colspan="2"><span class="courselistcomment areaheader ">Presentation Requirement</span></td><td class="hourscol"></td></tr> <tr class="even"><td colspan="2"><span class="courselistcomment">Complete one of the following:</span></td><td class="hourscol">4</td></tr> <tr class="odd"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=COMM%201112" title="COMM 1112" class="bubblelink code" onclick="return showCourse(this, 'COMM 1112');">COMM 1112</a></div></td><td>Public Speaking</td><td class="hourscol"></td></tr> <tr class="even"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=COMM%201113" title="COMM 1113" class="bubblelink code" onclick="return showCourse(this, 'COMM 1113');">COMM 1113</a></div></td><td>Business and Professional Speaking</td><td class="hourscol"></td></tr> <tr class="odd"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=COMM%201210" title="COMM 1210" class="bubblelink code" onclick="return showCourse(this, 'COMM 1210');">COMM 1210</a></div></td><td>Persuasion and Rhetoric</td><td class="hourscol"></td></tr> <tr class="even"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=COMM%201511" title="COMM 1511" class="bubblelink code" onclick="return showCourse(this, 'COMM 1511');">COMM 1511</a></div></td><td>Communication and Storytelling</td><td class="hourscol"></td></tr> <tr class="odd"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=THTR%201125" title="THTR 1125" class="bubblelink code" onclick="return showCourse(this, 'THTR 1125');">THTR 1125</a></div></td><td>Improvisation</td><td class="hourscol"></td></tr> <tr class="even"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=THTR%201130" title="THTR 1130" class="bubblelink code" onclick="return showCourse(this, 'THTR 1130');">THTR 1130</a></div></td><td>Introduction to Acting</td><td class="hourscol"></td></tr> <tr class="odd"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=THTR%201180" title="THTR 1180" class="bubblelink code" onclick="return showCourse(this, 'THTR 1180');">THTR 1180</a></div></td><td>The Dynamic On-Screen Presenter</td><td class="hourscol"></td></tr> <tr class="even"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=THTR%202345" title="THTR 2345" class="bubblelink code" onclick="return showCourse(this, 'THTR 2345');">THTR 2345</a></div></td><td>Acting for the Camera</td><td class="hourscol"></td></tr> <tr class="odd areaheader "><td colspan="2"><span class="courselistcomment areaheader ">Khoury Elective Courses</span></td><td class="hourscol"></td></tr> <tr class="even"><td colspan="2"><span class="courselistcomment">Students should plan to take a NUpath capstone using designated courses in either a concentration, computer science electives, or as a general elective.</span></td><td class="hourscol"></td></tr> <tr class="odd"><td colspan="2"><span class="courselistcomment">With adviser approval, directed study, research, project study, and appropriate graduate-level courses may also be taken as upper-division electives.</span></td><td class="hourscol"></td></tr> <tr class="even"><td colspan="2"><span class="courselistcomment">Complete 8 semester hours of CS, CY, DS, or IS classes that are not already required. Choose courses within the following ranges:</span></td><td class="hourscol">8</td></tr> <tr class="odd"><td colspan="2"><div style="margin-left:20px;" class="blockindent"><span class="courselistcomment commentindent"><a href="/search/?P=CS%202500" title="CS 2500" class="bubblelink code" onclick="return showCourse(this, 'CS 2500');">CS 2500</a> or higher, except <a href="/search/?P=CS%205010" title="CS 5010" class="bubblelink code" onclick="return showCourse(this, 'CS 5010');">CS 5010</a></span></div></td><td class="hourscol"></td></tr> <tr class="even"><td colspan="2"><div style="margin-left:20px;" class="blockindent"><span class="courselistcomment commentindent">CY 2000 or higher, except <a href="/search/?P=CY%204930" title="CY 4930" class="bubblelink code" onclick="return showCourse(this, 'CY 4930');">CY 4930</a></span></div></td><td class="hourscol"></td></tr> <tr class="odd"><td colspan="2"><div style="margin-left:20px;" class="blockindent"><span class="courselistcomment commentindent"><a href="/search/?P=DS%202500" title="DS 2500" class="bubblelink code" onclick="return showCourse(this, 'DS 2500');">DS 2500</a> or higher, except DS 4900</span></div></td><td class="hourscol"></td></tr> <tr class="even lastrow"><td colspan="2"><div style="margin-left:20px;" class="blockindent"><span class="courselistcomment commentindent"><a href="/search/?P=IS%202000" title="IS 2000" class="bubblelink code" onclick="return showCourse(this, 'IS 2000');">IS 2000</a> or higher, except IS 4900</span></div></td><td class="hourscol"></td></tr> </tbody> </table> <h2>Computer Science Concentrations </h2> <p>Pick one of the following concentrations and complete four courses in that concentration. In all concentrations, up to one <span class="sc_courseinline">Research (<a href="/search/?P=CS%204991" title="CS 4991" class="bubblelink code" onclick="return showCourse(this, 'CS 4991');">CS 4991</a>)</span> course can be substituted with college approval. Any missing prerequisites or NUpath requirements must be taken using computer science or general electives. In particular, students must arrange to take a NUpath capstone using either a course in the concentration or a CS, CY, DS, or IS course taken as a computer science elective or as a general elective.</p>  <ul> 	<li><a href="#ARIN">Artificial Intelligence</a></li> 	<li><a href="#FNDS">Foundations</a></li> 	<li><a href="#HUCC">Human-Centered Computing</a></li> 	<li><a href="#SFTW">Software</a></li> 	<li><a href="#SYST">Systems</a></li> </ul> <h2><span>Supporting Courses</span></h2> <table class="sc_courselist"> <caption class="hidden noscript">Course List</caption> <colgroup> <col class="codecol"/> <col class="titlecol"/> <col align="char" char="." class="hourscol"/> </colgroup> <thead> <tr class="hidden noscript"> <th scope="col">Code</th> <th scope="col">Title</th> <th scope="col" class="hourscol">Hours</th> </tr> </thead> <tbody> <tr class="even areaheader  firstrow"><td colspan="2"><span class="courselistcomment areaheader ">Mathematics Courses</span></td><td class="hourscol"></td></tr> <tr class="odd"><td class="codecol"><a href="/search/?P=MATH%201341" title="MATH 1341" class="bubblelink code" onclick="return showCourse(this, 'MATH 1341');">MATH 1341</a></td><td>Calculus 1 for Science and Engineering</td><td class="hourscol">4</td></tr> <tr class="even"><td class="codecol"><a href="/search/?P=MATH%201365" title="MATH 1365" class="bubblelink code" onclick="return showCourse(this, 'MATH 1365');">MATH 1365</a></td><td>Introduction to Mathematical Reasoning</td><td class="hourscol">4</td></tr> <tr class="odd areaheader "><td colspan="2"><span class="courselistcomment areaheader ">Computing and Social Issues</span></td><td class="hourscol"></td></tr> <tr class="even"><td colspan="2"><span class="courselistcomment">Complete one of the following:</span></td><td class="hourscol">4</td></tr> <tr class="odd"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=AFAM%202600" title="AFAM 2600" class="bubblelink code" onclick="return showCourse(this, 'AFAM 2600');">AFAM 2600</a></div></td><td>Issues in Race, Science, and Technology</td><td class="hourscol"></td></tr> <tr class="even"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=CY%204170" title="CY 4170" class="bubblelink code" onclick="return showCourse(this, 'CY 4170');">CY 4170</a></div></td><td>The Law, Ethics, and Policy of Data and Digital Technologies</td><td class="hourscol"></td></tr> <tr class="odd"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=CY%205240" title="CY 5240" class="bubblelink code" onclick="return showCourse(this, 'CY 5240');">CY 5240</a></div></td><td>Cyberlaw: Privacy, Ethics, and Digital Rights</td><td class="hourscol"></td></tr> <tr class="even"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=ENGL%202150" title="ENGL 2150" class="bubblelink code" onclick="return showCourse(this, 'ENGL 2150');">ENGL 2150</a></div></td><td>Literature and Digital Diversity</td><td class="hourscol"></td></tr> <tr class="odd"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=HIST%202220" title="HIST 2220" class="bubblelink code" onclick="return showCourse(this, 'HIST 2220');">HIST 2220</a></div></td><td>History of Technology</td><td class="hourscol"></td></tr> <tr class="even"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=INSH%202102" title="INSH 2102" class="bubblelink code" onclick="return showCourse(this, 'INSH 2102');">INSH 2102</a></div></td><td>Bostonography: The City through Data, Texts, Maps, and Networks</td><td class="hourscol"></td></tr> <tr class="odd"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=IS%201300" title="IS 1300" class="bubblelink code" onclick="return showCourse(this, 'IS 1300');">IS 1300</a></div></td><td>Knowledge in a Digital World</td><td class="hourscol"></td></tr> <tr class="orclass odd"><td class="codecol orclass"><div style="margin-left:20px;" class="blockindent">or <a href="/search/?P=PHIL%201300" title="PHIL 1300" class="bubblelink code" onclick="return showCourse(this, 'PHIL 1300');">PHIL 1300</a></div></td><td colspan="2"> Knowledge in a Digital World</td></tr> <tr class="even"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=PHIL%201145" title="PHIL 1145" class="bubblelink code" onclick="return showCourse(this, 'PHIL 1145');">PHIL 1145</a></div></td><td>Technology and Human Values</td><td class="hourscol"></td></tr> <tr class="odd"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=SOCL%201280" title="SOCL 1280" class="bubblelink code" onclick="return showCourse(this, 'SOCL 1280');">SOCL 1280</a></div></td><td>The Twenty-First-Century Workplace</td><td class="hourscol"></td></tr> <tr class="even"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=SOCL%202485" title="SOCL 2485" class="bubblelink code" onclick="return showCourse(this, 'SOCL 2485');">SOCL 2485</a></div></td><td>Environment, Technology, and Society</td><td class="hourscol"></td></tr> <tr class="odd"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=SOCL%204528" title="SOCL 4528" class="bubblelink code" onclick="return showCourse(this, 'SOCL 4528');">SOCL 4528</a></div></td><td>Computers and Society</td><td class="hourscol"></td></tr> <tr class="even areaheader "><td colspan="2"><span class="courselistcomment areaheader ">Electrical Engineering</span></td><td class="hourscol"></td></tr> <tr class="odd"><td class="codecol"><a href="/search/?P=EECE%202322" title="EECE 2322" class="bubblelink code" onclick="return showCourse(this, 'EECE 2322');">EECE 2322</a><br/><span style="margin-left:20px;" class="blockindent">and <a href="/search/?P=EECE%202323" title="EECE 2323" class="bubblelink code" onclick="return showCourse(this, 'EECE 2323');">EECE 2323</a></span></td><td>Fundamentals of Digital Design and Computer Organization<br/><span style="margin-left:20px;" class="blockindent">and Lab for EECE 2322</span></td><td class="hourscol">5</td></tr> <tr class="even areaheader "><td colspan="2"><span class="courselistcomment areaheader ">Science Requirement</span></td><td class="hourscol"></td></tr> <tr class="odd"><td colspan="2"><span class="courselistcomment">Complete two courses (and any required labs) from the following science categories:</span></td><td class="hourscol">8</td></tr> <tr class="even areasubheader undefined subheader "><td colspan="2"><span class="courselistcomment areasubheader undefined"><i>Biology</i></span></td><td class="hourscol"></td></tr> <tr class="odd"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=BIOL%201111" title="BIOL 1111" class="bubblelink code" onclick="return showCourse(this, 'BIOL 1111');">BIOL 1111</a><br/><span style="margin-left:20px;" class="blockindent">and <a href="/search/?P=BIOL%201112" title="BIOL 1112" class="bubblelink code" onclick="return showCourse(this, 'BIOL 1112');">BIOL 1112</a></span></div></td><td>General Biology 1<br/><span style="margin-left:20px;" class="blockindent">and Lab for BIOL 1111</span></td><td class="hourscol"></td></tr> <tr class="even"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=BIOL%201113" title="BIOL 1113" class="bubblelink code" onclick="return showCourse(this, 'BIOL 1113');">BIOL 1113</a><br/><span style="margin-left:20px;" class="blockindent">and <a href="/search/?P=BIOL%201114" title="BIOL 1114" class="bubblelink code" onclick="return showCourse(this, 'BIOL 1114');">BIOL 1114</a></span></div></td><td>General Biology 2<br/><span style="margin-left:20px;" class="blockindent">and Lab for BIOL 1113</span></td><td class="hourscol"></td></tr> <tr class="odd"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=BIOL%202301" title="BIOL 2301" class="bubblelink code" onclick="return showCourse(this, 'BIOL 2301');">BIOL 2301</a><br/><span style="margin-left:20px;" class="blockindent">and <a href="/search/?P=BIOL%202302" title="BIOL 2302" class="bubblelink code" onclick="return showCourse(this, 'BIOL 2302');">BIOL 2302</a></span></div></td><td>Genetics and Molecular Biology<br/><span style="margin-left:20px;" class="blockindent">and Lab for BIOL 2301</span></td><td class="hourscol"></td></tr> <tr class="even areasubheader undefined subheader "><td colspan="2"><span class="courselistcomment areasubheader undefined"><i>Chemistry</i></span></td><td class="hourscol"></td></tr> <tr class="odd"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=CHEM%201161" title="CHEM 1161" class="bubblelink code" onclick="return showCourse(this, 'CHEM 1161');">CHEM 1161</a><br/><span style="margin-left:20px;" class="blockindent">and <a href="/search/?P=CHEM%201162" title="CHEM 1162" class="bubblelink code" onclick="return showCourse(this, 'CHEM 1162');">CHEM 1162</a></span></div></td><td>General Chemistry for Science Majors<br/><span style="margin-left:20px;" class="blockindent">and Lab for CHEM 1161</span></td><td class="hourscol"></td></tr> <tr class="even"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=CHEM%201211" title="CHEM 1211" class="bubblelink code" onclick="return showCourse(this, 'CHEM 1211');">CHEM 1211</a><br/><span style="margin-left:20px;" class="blockindent">and <a href="/search/?P=CHEM%201212" title="CHEM 1212" class="bubblelink code" onclick="return showCourse(this, 'CHEM 1212');">CHEM 1212</a></span><br/><span style="margin-left:20px;" class="blockindent">and <a href="/search/?P=CHEM%201213" title="CHEM 1213" class="bubblelink code" onclick="return showCourse(this, 'CHEM 1213');">CHEM 1213</a></span></div></td><td>General Chemistry 1<br/><span style="margin-left:20px;" class="blockindent">and Lab for CHEM 1211</span><br/><span style="margin-left:20px;" class="blockindent">and Recitation for CHEM 1211</span></td><td class="hourscol"></td></tr> <tr class="odd"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=CHEM%201214" title="CHEM 1214" class="bubblelink code" onclick="return showCourse(this, 'CHEM 1214');">CHEM 1214</a><br/><span style="margin-left:20px;" class="blockindent">and <a href="/search/?P=CHEM%201215" title="CHEM 1215" class="bubblelink code" onclick="return showCourse(this, 'CHEM 1215');">CHEM 1215</a></span><br/><span style="margin-left:20px;" class="blockindent">and <a href="/search/?P=CHEM%201216" title="CHEM 1216" class="bubblelink code" onclick="return showCourse(this, 'CHEM 1216');">CHEM 1216</a></span></div></td><td>General Chemistry 2<br/><span style="margin-left:20px;" class="blockindent">and Lab for CHEM 1214</span><br/><span style="margin-left:20px;" class="blockindent">and Recitation for CHEM 1214</span></td><td class="hourscol"></td></tr> <tr class="even areasubheader undefined subheader "><td colspan="2"><span class="courselistcomment areasubheader undefined"><i>Geology/Environmental Science</i></span></td><td class="hourscol"></td></tr> <tr class="odd"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=ENVR%201200" title="ENVR 1200" class="bubblelink code" onclick="return showCourse(this, 'ENVR 1200');">ENVR 1200</a><br/><span style="margin-left:20px;" class="blockindent">and <a href="/search/?P=ENVR%201201" title="ENVR 1201" class="bubblelink code" onclick="return showCourse(this, 'ENVR 1201');">ENVR 1201</a></span></div></td><td>Dynamic Earth<br/><span style="margin-left:20px;" class="blockindent">and Lab for ENVR 1200</span></td><td class="hourscol"></td></tr> <tr class="even"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=ENVR%201202" title="ENVR 1202" class="bubblelink code" onclick="return showCourse(this, 'ENVR 1202');">ENVR 1202</a><br/><span style="margin-left:20px;" class="blockindent">and <a href="/search/?P=ENVR%201203" title="ENVR 1203" class="bubblelink code" onclick="return showCourse(this, 'ENVR 1203');">ENVR 1203</a></span></div></td><td>History of Earth and Life<br/><span style="margin-left:20px;" class="blockindent">and Interpreting Earth History</span></td><td class="hourscol"></td></tr> <tr class="odd"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=ENVR%202310" title="ENVR 2310" class="bubblelink code" onclick="return showCourse(this, 'ENVR 2310');">ENVR 2310</a><br/><span style="margin-left:20px;" class="blockindent">and <a href="/search/?P=ENVR%202311" title="ENVR 2311" class="bubblelink code" onclick="return showCourse(this, 'ENVR 2311');">ENVR 2311</a></span></div></td><td>Earth Materials<br/><span style="margin-left:20px;" class="blockindent">and Lab for ENVR 2310</span></td><td class="hourscol"></td></tr> <tr class="even"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=ENVR%202340" title="ENVR 2340" class="bubblelink code" onclick="return showCourse(this, 'ENVR 2340');">ENVR 2340</a><br/><span style="margin-left:20px;" class="blockindent">and <a href="/search/?P=ENVR%202341" title="ENVR 2341" class="bubblelink code" onclick="return showCourse(this, 'ENVR 2341');">ENVR 2341</a></span></div></td><td>Earth Landforms and Processes<br/><span style="margin-left:20px;" class="blockindent">and Lab for ENVR 2340</span></td><td class="hourscol"></td></tr> <tr class="odd"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=ENVR%203300" title="ENVR 3300" class="bubblelink code" onclick="return showCourse(this, 'ENVR 3300');">ENVR 3300</a><br/><span style="margin-left:20px;" class="blockindent">and <a href="/search/?P=ENVR%203301" title="ENVR 3301" class="bubblelink code" onclick="return showCourse(this, 'ENVR 3301');">ENVR 3301</a></span></div></td><td>Geographic Information Systems<br/><span style="margin-left:20px;" class="blockindent">and Lab for ENVR 3300</span></td><td class="hourscol"></td></tr> <tr class="even"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=ENVR%204500" title="ENVR 4500" class="bubblelink code" onclick="return showCourse(this, 'ENVR 4500');">ENVR 4500</a><br/><span style="margin-left:20px;" class="blockindent">and <a href="/search/?P=ENVR%204501" title="ENVR 4501" class="bubblelink code" onclick="return showCourse(this, 'ENVR 4501');">ENVR 4501</a></span></div></td><td>Applied Hydrogeology<br/><span style="margin-left:20px;" class="blockindent">and Lab for ENVR 4500</span></td><td class="hourscol"></td></tr> <tr class="odd"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=ENVR%205242" title="ENVR 5242" class="bubblelink code" onclick="return showCourse(this, 'ENVR 5242');">ENVR 5242</a><br/><span style="margin-left:20px;" class="blockindent">and <a href="/search/?P=ENVR%205243" title="ENVR 5243" class="bubblelink code" onclick="return showCourse(this, 'ENVR 5243');">ENVR 5243</a></span></div></td><td>Ancient Marine Life<br/><span style="margin-left:20px;" class="blockindent">and Lab for ENVR 5242</span></td><td class="hourscol"></td></tr> <tr class="even areasubheader undefined subheader "><td colspan="2"><span class="courselistcomment areasubheader undefined"><i>Mathematics</i></span></td><td class="hourscol"></td></tr> <tr class="odd"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=MATH%201342" title="MATH 1342" class="bubblelink code" onclick="return showCourse(this, 'MATH 1342');">MATH 1342</a></div></td><td>Calculus 2 for Science and Engineering</td><td class="hourscol"></td></tr> <tr class="even"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=MATH%202331" title="MATH 2331" class="bubblelink code" onclick="return showCourse(this, 'MATH 2331');">MATH 2331</a></div></td><td>Linear Algebra</td><td class="hourscol"></td></tr> <tr class="odd"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=MATH%203081" title="MATH 3081" class="bubblelink code" onclick="return showCourse(this, 'MATH 3081');">MATH 3081</a></div></td><td>Probability and Statistics</td><td class="hourscol"></td></tr> <tr class="even areasubheader undefined subheader "><td colspan="2"><span class="courselistcomment areasubheader undefined"><i>Physics</i></span></td><td class="hourscol"></td></tr> <tr class="odd"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=PHYS%201145" title="PHYS 1145" class="bubblelink code" onclick="return showCourse(this, 'PHYS 1145');">PHYS 1145</a><br/><span style="margin-left:20px;" class="blockindent">and <a href="/search/?P=PHYS%201146" title="PHYS 1146" class="bubblelink code" onclick="return showCourse(this, 'PHYS 1146');">PHYS 1146</a></span></div></td><td>Physics for Life Sciences 1<br/><span style="margin-left:20px;" class="blockindent">and Lab for PHYS 1145</span></td><td class="hourscol"></td></tr> <tr class="even"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=PHYS%201147" title="PHYS 1147" class="bubblelink code" onclick="return showCourse(this, 'PHYS 1147');">PHYS 1147</a><br/><span style="margin-left:20px;" class="blockindent">and <a href="/search/?P=PHYS%201148" title="PHYS 1148" class="bubblelink code" onclick="return showCourse(this, 'PHYS 1148');">PHYS 1148</a></span></div></td><td>Physics for Life Sciences 2<br/><span style="margin-left:20px;" class="blockindent">and Lab for PHYS 1147</span></td><td class="hourscol"></td></tr> <tr class="odd"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=PHYS%201151" title="PHYS 1151" class="bubblelink code" onclick="return showCourse(this, 'PHYS 1151');">PHYS 1151</a><br/><span style="margin-left:20px;" class="blockindent">and <a href="/search/?P=PHYS%201152" title="PHYS 1152" class="bubblelink code" onclick="return showCourse(this, 'PHYS 1152');">PHYS 1152</a></span><br/><span style="margin-left:20px;" class="blockindent">and <a href="/search/?P=PHYS%201153" title="PHYS 1153" class="bubblelink code" onclick="return showCourse(this, 'PHYS 1153');">PHYS 1153</a></span></div></td><td>Physics for Engineering 1<br/><span style="margin-left:20px;" class="blockindent">and Lab for PHYS 1151</span><br/><span style="margin-left:20px;" class="blockindent">and Interactive Learning Seminar for PHYS 1151</span></td><td class="hourscol"></td></tr> <tr class="even"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=PHYS%201155" title="PHYS 1155" class="bubblelink code" onclick="return showCourse(this, 'PHYS 1155');">PHYS 1155</a><br/><span style="margin-left:20px;" class="blockindent">and <a href="/search/?P=PHYS%201156" title="PHYS 1156" class="bubblelink code" onclick="return showCourse(this, 'PHYS 1156');">PHYS 1156</a></span><br/><span style="margin-left:20px;" class="blockindent">and <a href="/search/?P=PHYS%201157" title="PHYS 1157" class="bubblelink code" onclick="return showCourse(this, 'PHYS 1157');">PHYS 1157</a></span></div></td><td>Physics for Engineering 2<br/><span style="margin-left:20px;" class="blockindent">and Lab for PHYS 1155</span><br/><span style="margin-left:20px;" class="blockindent">and Interactive Learning Seminar for PHYS 1155</span></td><td class="hourscol"></td></tr> <tr class="odd"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=PHYS%201161" title="PHYS 1161" class="bubblelink code" onclick="return showCourse(this, 'PHYS 1161');">PHYS 1161</a><br/><span style="margin-left:20px;" class="blockindent">and <a href="/search/?P=PHYS%201162" title="PHYS 1162" class="bubblelink code" onclick="return showCourse(this, 'PHYS 1162');">PHYS 1162</a></span><br/><span style="margin-left:20px;" class="blockindent">and <a href="/search/?P=PHYS%201163" title="PHYS 1163" class="bubblelink code" onclick="return showCourse(this, 'PHYS 1163');">PHYS 1163</a></span></div></td><td>Physics 1<br/><span style="margin-left:20px;" class="blockindent">and Lab for PHYS 1161</span><br/><span style="margin-left:20px;" class="blockindent">and Recitation for PHYS 1161</span></td><td class="hourscol"></td></tr> <tr class="even lastrow"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=PHYS%201165" title="PHYS 1165" class="bubblelink code" onclick="return showCourse(this, 'PHYS 1165');">PHYS 1165</a><br/><span style="margin-left:20px;" class="blockindent">and <a href="/search/?P=PHYS%201166" title="PHYS 1166" class="bubblelink code" onclick="return showCourse(this, 'PHYS 1166');">PHYS 1166</a></span><br/><span style="margin-left:20px;" class="blockindent">and <a href="/search/?P=PHYS%201167" title="PHYS 1167" class="bubblelink code" onclick="return showCourse(this, 'PHYS 1167');">PHYS 1167</a></span></div></td><td>Physics 2<br/><span style="margin-left:20px;" class="blockindent">and Lab for PHYS 1165</span><br/><span style="margin-left:20px;" class="blockindent">and Recitation for PHYS 1165</span></td><td class="hourscol"></td></tr> </tbody> </table> <h2>Computer Science Writing Requirement</h2> <table class="sc_courselist"> <caption class="hidden noscript">Course List</caption> <colgroup> <col class="codecol"/> <col class="titlecol"/> <col align="char" char="." class="hourscol"/> </colgroup> <thead> <tr class="hidden noscript"> <th scope="col">Code</th> <th scope="col">Title</th> <th scope="col" class="hourscol">Hours</th> </tr> </thead> <tbody> <tr class="even areaheader  firstrow"><td colspan="2"><span class="courselistcomment areaheader ">College Writing</span></td><td class="hourscol"></td></tr> <tr class="odd"><td class="codecol"><a href="/search/?P=ENGW%201111" title="ENGW 1111" class="bubblelink code" onclick="return showCourse(this, 'ENGW 1111');">ENGW 1111</a></td><td>First-Year Writing</td><td class="hourscol">4</td></tr> <tr class="even areaheader "><td colspan="2"><span class="courselistcomment areaheader ">Advanced Writing in the Disciplines</span></td><td class="hourscol"></td></tr> <tr class="odd lastrow"><td class="codecol"><a href="/search/?P=ENGW%203302" title="ENGW 3302" class="bubblelink code" onclick="return showCourse(this, 'ENGW 3302');">ENGW 3302</a></td><td>Advanced Writing in the Technical Professions</td><td class="hourscol">4</td></tr> <tr class="orclass odd lastrow"><td class="codecol orclass">or <a href="/search/?P=ENGW%203315" title="ENGW 3315" class="bubblelink code" onclick="return showCourse(this, 'ENGW 3315');">ENGW 3315</a></td><td colspan="2"> Interdisciplinary Advanced Writing in the Disciplines</td></tr> </tbody> </table> <h2>Required General Electives</h2> <table class="sc_courselist"> <caption class="hidden noscript">Course List</caption> <colgroup> <col class="codecol"/> <col class="titlecol"/> <col align="char" char="." class="hourscol"/> </colgroup> <thead> <tr class="hidden noscript"> <th scope="col">Code</th> <th scope="col">Title</th> <th scope="col" class="hourscol">Hours</th> </tr> </thead> <tbody> <tr class="even lastrow firstrow"><td colspan="2"><span class="courselistcomment">Complete 28 semester hours of general electives.</span></td><td class="hourscol">28</td></tr> </tbody> </table> <h2>Khoury College GPA Requirement</h2> <p>Minimum 2.000 GPA required in all CS, CY, DS, and IS courses</p> <h2>Computer Science Credit Requirement</h2> <p>Complete 72 semester hours in the major. </p> <h2>NUpath Requirements Satisfied</h2> <ul> 	<li>Engaging with the Natural and Designed World</li> 	<li>Conducting Formal and Quantitative Reasoning</li> 	<li>Analyzing and Using Data</li> 	<li>Writing in the First Year</li> 	<li>Advanced Writing in the Disciplines</li> 	<li>Writing-Intensive in the Major</li> 	<li>Demonstrating Thought and Action in a Capstone</li> </ul> <p>Integrating Knowledge and Skills Through Experience is satisfied through co-op.</p> <h2><span>Program Requirement</span></h2> <p>134 total semester hours required</p> <hr/> <h3><a id="ARIN" name="ARIN"></a>Concentration in Artificial Intelligence</h3> <table class="sc_courselist"> <caption class="hidden noscript">Course List</caption> <colgroup> <col class="codecol"/> <col class="titlecol"/> <col align="char" char="." class="hourscol"/> </colgroup> <thead> <tr class="hidden noscript"> <th scope="col">Code</th> <th scope="col">Title</th> <th scope="col" class="hourscol">Hours</th> </tr> </thead> <tbody> <tr class="even firstrow"><td class="codecol"><a href="/search/?P=CS%204100" title="CS 4100" class="bubblelink code" onclick="return showCourse(this, 'CS 4100');">CS 4100</a></td><td>Artificial Intelligence</td><td class="hourscol">4</td></tr> <tr class="odd"><td class="codecol"><a href="/search/?P=DS%204400" title="DS 4400" class="bubblelink code" onclick="return showCourse(this, 'DS 4400');">DS 4400</a></td><td>Machine Learning and Data Mining 1</td><td class="hourscol">4</td></tr> <tr class="even"><td colspan="2"><span class="courselistcomment">Complete two of the following not already taken:</span></td><td class="hourscol">8</td></tr> <tr class="odd"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=CS%204120" title="CS 4120" class="bubblelink code" onclick="return showCourse(this, 'CS 4120');">CS 4120</a></div></td><td>Natural Language Processing</td><td class="hourscol"></td></tr> <tr class="even"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=CS%204150" title="CS 4150" class="bubblelink code" onclick="return showCourse(this, 'CS 4150');">CS 4150</a></div></td><td>Game Artificial Intelligence</td><td class="hourscol"></td></tr> <tr class="odd"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=CS%204610" title="CS 4610" class="bubblelink code" onclick="return showCourse(this, 'CS 4610');">CS 4610</a></div></td><td>Robotic Science and Systems</td><td class="hourscol"></td></tr> <tr class="even"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=DS%204420" title="DS 4420" class="bubblelink code" onclick="return showCourse(this, 'DS 4420');">DS 4420</a></div></td><td>Machine Learning and Data Mining 2</td><td class="hourscol"></td></tr> <tr class="odd"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=IS%204200" title="IS 4200" class="bubblelink code" onclick="return showCourse(this, 'IS 4200');">IS 4200</a></div></td><td>Information Retrieval</td><td class="hourscol"></td></tr> <tr class="even lastrow"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=PSYC%203466" title="PSYC 3466" class="bubblelink code" onclick="return showCourse(this, 'PSYC 3466');">PSYC 3466</a></div></td><td>Cognition</td><td class="hourscol"></td></tr> </tbody> </table> <h3><a id="FNDS" name="FNDS"></a>Concentration in Foundations</h3> <table class="sc_courselist"> <caption class="hidden noscript">Course List</caption> <colgroup> <col class="codecol"/> <col class="titlecol"/> <col align="char" char="." class="hourscol"/> </colgroup> <thead> <tr class="hidden noscript"> <th scope="col">Code</th> <th scope="col">Title</th> <th scope="col" class="hourscol">Hours</th> </tr> </thead> <tbody> <tr class="even firstrow"><td colspan="2"><span class="courselistcomment">Complete two of the following:</span></td><td class="hourscol">8-9</td></tr> <tr class="odd"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=CS%202800" title="CS 2800" class="bubblelink code" onclick="return showCourse(this, 'CS 2800');">CS 2800</a></div></td><td>Logic and Computation</td><td class="hourscol"></td></tr> <tr class="orclass odd"><td class="codecol orclass"><div style="margin-left:20px;" class="blockindent">or <a href="/search/?P=CS%204820" title="CS 4820" class="bubblelink code" onclick="return showCourse(this, 'CS 4820');">CS 4820</a></div></td><td colspan="2"> Computer-Aided Reasoning</td></tr> <tr class="even"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=CS%204805" title="CS 4805" class="bubblelink code" onclick="return showCourse(this, 'CS 4805');">CS 4805</a></div></td><td>Fundamentals of Complexity Theory</td><td class="hourscol"></td></tr> <tr class="orclass even"><td class="codecol orclass"><div style="margin-left:20px;" class="blockindent">or <a href="/search/?P=CS%204810" title="CS 4810" class="bubblelink code" onclick="return showCourse(this, 'CS 4810');">CS 4810</a></div></td><td colspan="2"> Advanced Algorithms</td></tr> <tr class="odd"><td colspan="2"><span class="courselistcomment">Complete two of the following not already taken:</span></td><td class="hourscol">8</td></tr> <tr class="even"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=CS%203950" title="CS 3950" class="bubblelink code" onclick="return showCourse(this, 'CS 3950');">CS 3950</a><br/><span style="margin-left:20px;" class="blockindent">and <a href="/search/?P=CS%204950" title="CS 4950" class="bubblelink code" onclick="return showCourse(this, 'CS 4950');">CS 4950</a></span><br/><span style="margin-left:20px;" class="blockindent">and <a href="/search/?P=CS%204950" title="CS 4950" class="bubblelink code" onclick="return showCourse(this, 'CS 4950');">CS 4950</a></span></div></td><td>Introduction to Computer Science Research<br/><span style="margin-left:20px;" class="blockindent">and Computer Science Research Seminar</span><br/><span style="margin-left:20px;" class="blockindent">and Computer Science Research Seminar</span></td><td class="hourscol"></td></tr> <tr class="odd"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=CS%204805" title="CS 4805" class="bubblelink code" onclick="return showCourse(this, 'CS 4805');">CS 4805</a></div></td><td>Fundamentals of Complexity Theory</td><td class="hourscol"></td></tr> <tr class="even"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=CS%204810" title="CS 4810" class="bubblelink code" onclick="return showCourse(this, 'CS 4810');">CS 4810</a></div></td><td>Advanced Algorithms</td><td class="hourscol"></td></tr> <tr class="odd"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=CS%204820" title="CS 4820" class="bubblelink code" onclick="return showCourse(this, 'CS 4820');">CS 4820</a></div></td><td>Computer-Aided Reasoning</td><td class="hourscol"></td></tr> <tr class="even"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=CS%204830" title="CS 4830" class="bubblelink code" onclick="return showCourse(this, 'CS 4830');">CS 4830</a></div></td><td>System Specification, Verification, and Synthesis</td><td class="hourscol"></td></tr> <tr class="odd lastrow"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=CY%204770" title="CY 4770" class="bubblelink code" onclick="return showCourse(this, 'CY 4770');">CY 4770</a></div></td><td>Cryptography</td><td class="hourscol"></td></tr> </tbody> </table> <h3><a id="HUCC" name="HUCC"></a>Concentration in Human-Centered Computing*</h3> <table class="sc_courselist"> <caption class="hidden noscript">Course List</caption> <colgroup> <col class="codecol"/> <col class="titlecol"/> <col align="char" char="." class="hourscol"/> </colgroup> <thead> <tr class="hidden noscript"> <th scope="col">Code</th> <th scope="col">Title</th> <th scope="col" class="hourscol">Hours</th> </tr> </thead> <tbody> <tr class="even firstrow"><td class="codecol"><a href="/search/?P=IS%204300" title="IS 4300" class="bubblelink code" onclick="return showCourse(this, 'IS 4300');">IS 4300</a></td><td>Human Computer Interaction</td><td class="hourscol">4</td></tr> <tr class="odd"><td class="codecol"><a href="/search/?P=IS%204800" title="IS 4800" class="bubblelink code" onclick="return showCourse(this, 'IS 4800');">IS 4800</a></td><td>Empirical Research Methods</td><td class="hourscol">4</td></tr> <tr class="even"><td colspan="2"><span class="courselistcomment">Complete two of the following not already taken:</span></td><td class="hourscol">8</td></tr> <tr class="odd"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=CS%204120" title="CS 4120" class="bubblelink code" onclick="return showCourse(this, 'CS 4120');">CS 4120</a></div></td><td>Natural Language Processing</td><td class="hourscol"></td></tr> <tr class="even"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=CS%204520" title="CS 4520" class="bubblelink code" onclick="return showCourse(this, 'CS 4520');">CS 4520</a></div></td><td>Mobile Application Development</td><td class="hourscol"></td></tr> <tr class="odd"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=CS%204550" title="CS 4550" class="bubblelink code" onclick="return showCourse(this, 'CS 4550');">CS 4550</a></div></td><td>Web Development</td><td class="hourscol"></td></tr> <tr class="even"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=DS%204200" title="DS 4200" class="bubblelink code" onclick="return showCourse(this, 'DS 4200');">DS 4200</a></div></td><td>Information Presentation and Visualization</td><td class="hourscol"></td></tr> <tr class="odd lastrow"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=IS%202000" title="IS 2000" class="bubblelink code" onclick="return showCourse(this, 'IS 2000');">IS 2000</a></div></td><td>Principles of Information Science</td><td class="hourscol"></td></tr> </tbody> </table> <p><sub>*The concentration in human-centered computing requires a fall co-op pattern.</sub></p> <h3><a id="SFTW" name="SFTW"></a>Concentration in Software</h3> <table class="sc_courselist"> <caption class="hidden noscript">Course List</caption> <colgroup> <col class="codecol"/> <col class="titlecol"/> <col align="char" char="." class="hourscol"/> </colgroup> <thead> <tr class="hidden noscript"> <th scope="col">Code</th> <th scope="col">Title</th> <th scope="col" class="hourscol">Hours</th> </tr> </thead> <tbody> <tr class="even firstrow"><td class="codecol"><a href="/search/?P=CS%202800" title="CS 2800" class="bubblelink code" onclick="return showCourse(this, 'CS 2800');">CS 2800</a></td><td>Logic and Computation</td><td class="hourscol">4</td></tr> <tr class="odd"><td class="codecol"><a href="/search/?P=CS%204400" title="CS 4400" class="bubblelink code" onclick="return showCourse(this, 'CS 4400');">CS 4400</a></td><td>Programming Languages</td><td class="hourscol">4</td></tr> <tr class="even"><td class="codecol"><a href="/search/?P=CS%204700" title="CS 4700" class="bubblelink code" onclick="return showCourse(this, 'CS 4700');">CS 4700</a></td><td>Network Fundamentals</td><td class="hourscol">4</td></tr> <tr class="orclass even"><td class="codecol orclass">or <a href="/search/?P=CS%204730" title="CS 4730" class="bubblelink code" onclick="return showCourse(this, 'CS 4730');">CS 4730</a></td><td colspan="2"> Distributed Systems</td></tr> <tr class="odd"><td colspan="2"><span class="courselistcomment">Complete one of the following not already taken:</span></td><td class="hourscol"></td></tr> <tr class="even"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=CS%203520" title="CS 3520" class="bubblelink code" onclick="return showCourse(this, 'CS 3520');">CS 3520</a></div></td><td>Programming in C++</td><td class="hourscol"></td></tr> <tr class="odd"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=CS%204410" title="CS 4410" class="bubblelink code" onclick="return showCourse(this, 'CS 4410');">CS 4410</a></div></td><td>Compilers</td><td class="hourscol"></td></tr> <tr class="even"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=CS%204550" title="CS 4550" class="bubblelink code" onclick="return showCourse(this, 'CS 4550');">CS 4550</a></div></td><td>Web Development</td><td class="hourscol"></td></tr> <tr class="odd"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=CS%204700" title="CS 4700" class="bubblelink code" onclick="return showCourse(this, 'CS 4700');">CS 4700</a></div></td><td>Network Fundamentals</td><td class="hourscol"></td></tr> <tr class="even"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=CS%204730" title="CS 4730" class="bubblelink code" onclick="return showCourse(this, 'CS 4730');">CS 4730</a></div></td><td>Distributed Systems</td><td class="hourscol"></td></tr> <tr class="odd"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=CS%204820" title="CS 4820" class="bubblelink code" onclick="return showCourse(this, 'CS 4820');">CS 4820</a></div></td><td>Computer-Aided Reasoning</td><td class="hourscol"></td></tr> <tr class="even lastrow"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=CS%204830" title="CS 4830" class="bubblelink code" onclick="return showCourse(this, 'CS 4830');">CS 4830</a></div></td><td>System Specification, Verification, and Synthesis</td><td class="hourscol"></td></tr> </tbody> </table> <h3><a id="SYST" name="SYST"></a>Concentration in Systems</h3> <table class="sc_courselist"> <caption class="hidden noscript">Course List</caption> <colgroup> <col class="codecol"/> <col class="titlecol"/> <col align="char" char="." class="hourscol"/> </colgroup> <thead> <tr class="hidden noscript"> <th scope="col">Code</th> <th scope="col">Title</th> <th scope="col" class="hourscol">Hours</th> </tr> </thead> <tbody> <tr class="even firstrow"><td class="codecol"><a href="/search/?P=CS%204700" title="CS 4700" class="bubblelink code" onclick="return showCourse(this, 'CS 4700');">CS 4700</a></td><td>Network Fundamentals</td><td class="hourscol">4</td></tr> <tr class="orclass even firstrow"><td class="codecol orclass">or <a href="/search/?P=CS%204730" title="CS 4730" class="bubblelink code" onclick="return showCourse(this, 'CS 4730');">CS 4730</a></td><td colspan="2"> Distributed Systems</td></tr> <tr class="odd"><td colspan="2"><span class="courselistcomment">Complete one of the following not already taken:</span></td><td class="hourscol">4</td></tr> <tr class="even"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=CY%203740" title="CY 3740" class="bubblelink code" onclick="return showCourse(this, 'CY 3740');">CY 3740</a></div></td><td>Systems Security</td><td class="hourscol"></td></tr> <tr class="odd"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=CY%204740" title="CY 4740" class="bubblelink code" onclick="return showCourse(this, 'CY 4740');">CY 4740</a></div></td><td>Network Security</td><td class="hourscol"></td></tr> <tr class="even"><td colspan="2"><span class="courselistcomment">Complete two of the following not already taken:</span></td><td class="hourscol">8</td></tr> <tr class="odd"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=CS%203520" title="CS 3520" class="bubblelink code" onclick="return showCourse(this, 'CS 3520');">CS 3520</a></div></td><td>Programming in C++</td><td class="hourscol"></td></tr> <tr class="even"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=CS%204300" title="CS 4300" class="bubblelink code" onclick="return showCourse(this, 'CS 4300');">CS 4300</a></div></td><td>Computer Graphics</td><td class="hourscol"></td></tr> <tr class="odd"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=CS%204610" title="CS 4610" class="bubblelink code" onclick="return showCourse(this, 'CS 4610');">CS 4610</a></div></td><td>Robotic Science and Systems</td><td class="hourscol"></td></tr> <tr class="even"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=CS%204700" title="CS 4700" class="bubblelink code" onclick="return showCourse(this, 'CS 4700');">CS 4700</a></div></td><td>Network Fundamentals</td><td class="hourscol"></td></tr> <tr class="odd"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=CS%204710" title="CS 4710" class="bubblelink code" onclick="return showCourse(this, 'CS 4710');">CS 4710</a></div></td><td>Mobile and Wireless Systems</td><td class="hourscol"></td></tr> <tr class="even"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=CS%204730" title="CS 4730" class="bubblelink code" onclick="return showCourse(this, 'CS 4730');">CS 4730</a></div></td><td>Distributed Systems</td><td class="hourscol"></td></tr> <tr class="odd"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=CY%203740" title="CY 3740" class="bubblelink code" onclick="return showCourse(this, 'CY 3740');">CY 3740</a></div></td><td>Systems Security</td><td class="hourscol"></td></tr> <tr class="even"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=CY%204740" title="CY 4740" class="bubblelink code" onclick="return showCourse(this, 'CY 4740');">CY 4740</a></div></td><td>Network Security</td><td class="hourscol"></td></tr> <tr class="odd lastrow"><td class="codecol"><div style="margin-left:20px;" class="blockindent"><a href="/search/?P=CY%204760" title="CY 4760" class="bubblelink code" onclick="return showCourse(this, 'CY 4760');">CY 4760</a></div></td><td>Security of Wireless and Mobile Systems</td><td class="hourscol"></td></tr> </tbody> </table>
			</div>
			<div id="planofstudytextcontainer" class="page_content tab_content" role="tabpanel" aria-labelledby="planofstudytexttab" aria-hidden="true">
				<a name="planofstudytext"></a><h2><span>Sample Plan of Study: Four Years, Two Co-ops in Spring/Summer 1</span></h2> <table class="sc_plangrid"> <tr class="plangridyear firstrow"><th colspan="8">Year 1</th></tr><tr class="plangridterm"><th style="width: 20%;">Fall</th><th style="width: 5%;" class="hourscol">Hours</th><th style="width: 20%;">Spring</th><th style="width: 5%;" class="hourscol">Hours</th><th style="width: 20%;">Summer 1</th><th style="width: 5%;" class="hourscol">Hours</th><th style="width: 20%;">Summer 2</th><th style="width: 5%;" class="hourscol">Hours</th></tr> <tr class="even"> <td header="undefinedcodecol" class="codecol"><a href="/search/?P=CS%201200" title="CS 1200" class="bubblelink code" onclick="return showCourse(this, 'CS 1200');">CS 1200</a></td><td header="undefinedhourscol" class="hourscol">1</td><td header="undefinedcodecol" class="codecol"><a href="/search/?P=CS%202510" title="CS 2510" class="bubblelink code" onclick="return showCourse(this, 'CS 2510');">CS 2510</a><br/><span style="margin-left:20px;" class="blockindent">and <a href="/search/?P=CS%202511" title="CS 2511" class="bubblelink code" onclick="return showCourse(this, 'CS 2511');">CS 2511</a></span></td><td header="undefinedhourscol" class="hourscol">5</td><td header="undefinedcodecol" class="codecol"><a href="/search/?P=CS%203500" title="CS 3500" class="bubblelink code" onclick="return showCourse(this, 'CS 3500');">CS 3500</a><br/><span style="margin-left:20px;" class="blockindent">and <a href="/search/?P=CS%203501" title="CS 3501" class="bubblelink code" onclick="return showCourse(this, 'CS 3501');">CS 3501</a></span></td><td header="undefinedhourscol" class="hourscol">5</td><td header="undefinedcodecol" class="codecol"><a href="/search/?P=MATH%201341" title="MATH 1341" class="bubblelink code" onclick="return showCourse(this, 'MATH 1341');">MATH 1341</a></td><td header="undefinedhourscol" class="hourscol">4</td></tr> <tr class="odd"> <td header="undefinedcodecol" class="codecol"><a href="/search/?P=CS%201800" title="CS 1800" class="bubblelink code" onclick="return showCourse(this, 'CS 1800');">CS 1800</a><br/><span style="margin-left:20px;" class="blockindent">and <a href="/search/?P=CS%201802" title="CS 1802" class="bubblelink code" onclick="return showCourse(this, 'CS 1802');">CS 1802</a></span></td><td header="undefinedhourscol" class="hourscol">5</td><td header="undefinedcodecol" class="codecol"><a href="/search/?P=CS%202810" title="CS 2810" class="bubblelink code" onclick="return showCourse(this, 'CS 2810');">CS 2810</a></td><td header="undefinedhourscol" class="hourscol">4</td><td header="undefinedcodecol" class="codecol">Elective</td><td header="undefinedhourscol" class="hourscol">4</td><td header="undefinedcodecol" class="codecol">Elective</td><td header="undefinedhourscol" class="hourscol">4</td></tr> <tr class="even"> <td header="undefinedcodecol" class="codecol"><a href="/search/?P=CS%202500" title="CS 2500" class="bubblelink code" onclick="return showCourse(this, 'CS 2500');">CS 2500</a><br/><span style="margin-left:20px;" class="blockindent">and <a href="/search/?P=CS%202501" title="CS 2501" class="bubblelink code" onclick="return showCourse(this, 'CS 2501');">CS 2501</a></span></td><td header="undefinedhourscol" class="hourscol">5</td><td header="undefinedcodecol" class="codecol">Science elective with lab</td><td header="undefinedhourscol" class="hourscol">4</td><td colspan="2"> </td><td colspan="2"> </td></tr> <tr class="odd"> <td header="undefinedcodecol" class="codecol"><a href="/search/?P=ENGW%201111" title="ENGW 1111" class="bubblelink code" onclick="return showCourse(this, 'ENGW 1111');">ENGW 1111</a></td><td header="undefinedhourscol" class="hourscol">4</td><td header="undefinedcodecol" class="codecol">Elective</td><td header="undefinedhourscol" class="hourscol">4</td><td colspan="2"> </td><td colspan="2"> </td></tr> <tr class="even"> <td header="undefinedcodecol" class="codecol"><a href="/search/?P=MATH%201365" title="MATH 1365" class="bubblelink code" onclick="return showCourse(this, 'MATH 1365');">MATH 1365</a></td><td header="undefinedhourscol" class="hourscol">4</td><td colspan="2"> </td><td colspan="2"> </td><td colspan="2"> </td></tr> <tr class="plangridsum"><td> </td><td class="hourscol">19</td><td> </td><td class="hourscol">17</td><td> </td><td class="hourscol">9</td><td> </td><td class="hourscol">8</td></tr> <tr class="plangridyear"><th colspan="8">Year 2</th></tr><tr class="plangridterm"><th style="width: 20%;">Fall</th><th style="width: 5%;" class="hourscol">Hours</th><th style="width: 20%;">Spring</th><th style="width: 5%;" class="hourscol">Hours</th><th style="width: 20%;">Summer 1</th><th style="width: 5%;" class="hourscol">Hours</th><th style="width: 20%;">Summer 2</th><th style="width: 5%;" class="hourscol">Hours</th></tr> <tr class="even"> <td header="undefinedcodecol" class="codecol"><a href="/search/?P=CS%201210" title="CS 1210" class="bubblelink code" onclick="return showCourse(this, 'CS 1210');">CS 1210</a></td><td header="undefinedhourscol" class="hourscol">1</td><td header="undefinedcodecol" class="codecol">Co-op</td><td header="undefinedhourscol" class="hourscol"></td><td header="undefinedcodecol" class="codecol">Co-op</td><td header="undefinedhourscol" class="hourscol"></td><td header="undefinedcodecol" class="codecol"><a href="/search/?P=EECE%202322" title="EECE 2322" class="bubblelink code" onclick="return showCourse(this, 'EECE 2322');">EECE 2322</a><br/><span style="margin-left:20px;" class="blockindent">and <a href="/search/?P=EECE%202323" title="EECE 2323" class="bubblelink code" onclick="return showCourse(this, 'EECE 2323');">EECE 2323</a></span></td><td header="undefinedhourscol" class="hourscol">5</td></tr> <tr class="odd"> <td header="undefinedcodecol" class="codecol"><a href="/search/?P=CS%203000" title="CS 3000" class="bubblelink code" onclick="return showCourse(this, 'CS 3000');">CS 3000</a></td><td header="undefinedhourscol" class="hourscol">4</td><td colspan="2"> </td><td colspan="2"> </td><td header="undefinedcodecol" class="codecol">Elective</td><td header="undefinedhourscol" class="hourscol">4</td></tr> <tr class="even"> <td header="undefinedcodecol" class="codecol"><a href="/search/?P=CS%203650" title="CS 3650" class="bubblelink code" onclick="return showCourse(this, 'CS 3650');">CS 3650</a></td><td header="undefinedhourscol" class="hourscol">4</td><td colspan="2"> </td><td colspan="2"> </td><td colspan="2"> </td></tr> <tr class="odd"> <td header="undefinedcodecol" class="codecol">Concentration course</td><td header="undefinedhourscol" class="hourscol">4</td><td colspan="2"> </td><td colspan="2"> </td><td colspan="2"> </td></tr> <tr class="even"> <td header="undefinedcodecol" class="codecol">Elective</td><td header="undefinedhourscol" class="hourscol">4</td><td colspan="2"> </td><td colspan="2"> </td><td colspan="2"> </td></tr> <tr class="plangridsum"><td> </td><td class="hourscol">17</td><td> </td><td class="hourscol">0</td><td> </td><td class="hourscol">0</td><td> </td><td class="hourscol">9</td></tr> <tr class="plangridyear"><th colspan="8">Year 3</th></tr><tr class="plangridterm"><th style="width: 20%;">Fall</th><th style="width: 5%;" class="hourscol">Hours</th><th style="width: 20%;">Spring</th><th style="width: 5%;" class="hourscol">Hours</th><th style="width: 20%;">Summer 1</th><th style="width: 5%;" class="hourscol">Hours</th><th style="width: 20%;">Summer 2</th><th style="width: 5%;" class="hourscol">Hours</th></tr> <tr class="even"> <td header="undefinedcodecol" class="codecol"><a href="/search/?P=CS%203800" title="CS 3800" class="bubblelink code" onclick="return showCourse(this, 'CS 3800');">CS 3800</a></td><td header="undefinedhourscol" class="hourscol">4</td><td header="undefinedcodecol" class="codecol">Co-op</td><td header="undefinedhourscol" class="hourscol"></td><td header="undefinedcodecol" class="codecol">Co-op</td><td header="undefinedhourscol" class="hourscol"></td><td header="undefinedcodecol" class="codecol"><a href="/search/?P=ENGW%203302" title="ENGW 3302" class="bubblelink code" onclick="return showCourse(this, 'ENGW 3302');">ENGW 3302</a></td><td header="undefinedhourscol" class="hourscol">4</td></tr> <tr class="odd"> <td header="undefinedcodecol" class="codecol">Computing and social issues</td><td header="undefinedhourscol" class="hourscol">4</td><td colspan="2"> </td><td colspan="2"> </td><td header="undefinedcodecol" class="codecol">Elective</td><td header="undefinedhourscol" class="hourscol">4</td></tr> <tr class="even"> <td header="undefinedcodecol" class="codecol">Concentration course</td><td header="undefinedhourscol" class="hourscol">4</td><td colspan="2"> </td><td colspan="2"> </td><td colspan="2"> </td></tr> <tr class="odd"> <td header="undefinedcodecol" class="codecol">Presentation requirement </td><td header="undefinedhourscol" class="hourscol">4</td><td colspan="2"> </td><td colspan="2"> </td><td colspan="2"> </td></tr> <tr class="plangridsum"><td> </td><td class="hourscol">16</td><td> </td><td class="hourscol">0</td><td> </td><td class="hourscol">0</td><td> </td><td class="hourscol">8</td></tr> <tr class="plangridyear"><th colspan="8">Year 4</th></tr><tr class="plangridterm"><th style="width: 20%;">Fall</th><th style="width: 5%;" class="hourscol">Hours</th><th style="width: 20%;">Spring</th><th style="width: 5%;" class="hourscol">Hours</th><th colspan="2"> </th><th colspan="2"> </th></tr> <tr class="even"> <td header="undefinedcodecol" class="codecol">Concentration course</td><td header="undefinedhourscol" class="hourscol">4</td><td header="undefinedcodecol" class="codecol"><a href="/search/?P=CS%204530" title="CS 4530" class="bubblelink code" onclick="return showCourse(this, 'CS 4530');">CS 4530</a></td><td header="undefinedhourscol" class="hourscol">4</td><td colspan="2"> </td><td colspan="2"> </td></tr> <tr class="odd"> <td header="undefinedcodecol" class="codecol">Khoury elective</td><td header="undefinedhourscol" class="hourscol">4</td><td header="undefinedcodecol" class="codecol">Concentration course</td><td header="undefinedhourscol" class="hourscol">4</td><td colspan="2"> </td><td colspan="2"> </td></tr> <tr class="even"> <td header="undefinedcodecol" class="codecol">Security course</td><td header="undefinedhourscol" class="hourscol">4</td><td header="undefinedcodecol" class="codecol">Khoury elective</td><td header="undefinedhourscol" class="hourscol">4</td><td colspan="2"> </td><td colspan="2"> </td></tr> <tr class="odd"> <td header="undefinedcodecol" class="codecol">Elective</td><td header="undefinedhourscol" class="hourscol">4</td><td header="undefinedcodecol" class="codecol">Science elective with lab</td><td header="undefinedhourscol" class="hourscol">4</td><td colspan="2"> </td><td colspan="2"> </td></tr> <tr class="plangridsum"><td> </td><td class="hourscol">16</td><td> </td><td class="hourscol">16</td><td> </td><td class="hourscol"></td><td> </td><td class="hourscol"></td></tr> <tr class="plangridtotal lastrow"><td colspan="8">Total Hours: 135</td></tr> </table> <h2>Sample Plan of Study: Four Years, Two Co-ops in Summer 2/Fall</h2> <table class="sc_plangrid"> <tr class="plangridyear firstrow"><th colspan="8">Year 1</th></tr><tr class="plangridterm"><th style="width: 20%;">Fall</th><th style="width: 5%;" class="hourscol">Hours</th><th style="width: 20%;">Spring</th><th style="width: 5%;" class="hourscol">Hours</th><th style="width: 20%;">Summer 1</th><th style="width: 5%;" class="hourscol">Hours</th><th style="width: 20%;">Summer 2</th><th style="width: 5%;" class="hourscol">Hours</th></tr> <tr class="even"> <td header="undefinedcodecol" class="codecol"><a href="/search/?P=CS%201200" title="CS 1200" class="bubblelink code" onclick="return showCourse(this, 'CS 1200');">CS 1200</a></td><td header="undefinedhourscol" class="hourscol">1</td><td header="undefinedcodecol" class="codecol"><a href="/search/?P=CS%202510" title="CS 2510" class="bubblelink code" onclick="return showCourse(this, 'CS 2510');">CS 2510</a><br/><span style="margin-left:20px;" class="blockindent">and <a href="/search/?P=CS%202511" title="CS 2511" class="bubblelink code" onclick="return showCourse(this, 'CS 2511');">CS 2511</a></span></td><td header="undefinedhourscol" class="hourscol">5</td><td header="undefinedcodecol" class="codecol"><a href="/search/?P=CS%203000" title="CS 3000" class="bubblelink code" onclick="return showCourse(this, 'CS 3000');">CS 3000</a></td><td header="undefinedhourscol" class="hourscol">4</td><td header="undefinedcodecol" class="codecol"><a href="/search/?P=MATH%201341" title="MATH 1341" class="bubblelink code" onclick="return showCourse(this, 'MATH 1341');">MATH 1341</a></td><td header="undefinedhourscol" class="hourscol">4</td></tr> <tr class="odd"> <td header="undefinedcodecol" class="codecol"><a href="/search/?P=CS%201800" title="CS 1800" class="bubblelink code" onclick="return showCourse(this, 'CS 1800');">CS 1800</a><br/><span style="margin-left:20px;" class="blockindent">and <a href="/search/?P=CS%201802" title="CS 1802" class="bubblelink code" onclick="return showCourse(this, 'CS 1802');">CS 1802</a></span></td><td header="undefinedhourscol" class="hourscol">5</td><td header="undefinedcodecol" class="codecol"><a href="/search/?P=CS%202810" title="CS 2810" class="bubblelink code" onclick="return showCourse(this, 'CS 2810');">CS 2810</a></td><td header="undefinedhourscol" class="hourscol">4</td><td header="undefinedcodecol" class="codecol">Elective</td><td header="undefinedhourscol" class="hourscol">4</td><td header="undefinedcodecol" class="codecol">Elective</td><td header="undefinedhourscol" class="hourscol">4</td></tr> <tr class="even"> <td header="undefinedcodecol" class="codecol"><a href="/search/?P=CS%202500" title="CS 2500" class="bubblelink code" onclick="return showCourse(this, 'CS 2500');">CS 2500</a><br/><span style="margin-left:20px;" class="blockindent">and <a href="/search/?P=CS%202501" title="CS 2501" class="bubblelink code" onclick="return showCourse(this, 'CS 2501');">CS 2501</a></span></td><td header="undefinedhourscol" class="hourscol">5</td><td header="undefinedcodecol" class="codecol">Science elective with lab</td><td header="undefinedhourscol" class="hourscol">4</td><td colspan="2"> </td><td colspan="2"> </td></tr> <tr class="odd"> <td header="undefinedcodecol" class="codecol"><a href="/search/?P=ENGW%201111" title="ENGW 1111" class="bubblelink code" onclick="return showCourse(this, 'ENGW 1111');">ENGW 1111</a></td><td header="undefinedhourscol" class="hourscol">4</td><td header="undefinedcodecol" class="codecol">Elective</td><td header="undefinedhourscol" class="hourscol">4</td><td colspan="2"> </td><td colspan="2"> </td></tr> <tr class="even"> <td header="undefinedcodecol" class="codecol"><a href="/search/?P=MATH%201365" title="MATH 1365" class="bubblelink code" onclick="return showCourse(this, 'MATH 1365');">MATH 1365</a></td><td header="undefinedhourscol" class="hourscol">4</td><td colspan="2"> </td><td colspan="2"> </td><td colspan="2"> </td></tr> <tr class="plangridsum"><td> </td><td class="hourscol">19</td><td> </td><td class="hourscol">17</td><td> </td><td class="hourscol">8</td><td> </td><td class="hourscol">8</td></tr> <tr class="plangridyear"><th colspan="8">Year 2</th></tr><tr class="plangridterm"><th style="width: 20%;">Fall</th><th style="width: 5%;" class="hourscol">Hours</th><th style="width: 20%;">Spring</th><th style="width: 5%;" class="hourscol">Hours</th><th style="width: 20%;">Summer 1</th><th style="width: 5%;" class="hourscol">Hours</th><th style="width: 20%;">Summer 2</th><th style="width: 5%;" class="hourscol">Hours</th></tr> <tr class="even"> <td header="undefinedcodecol" class="codecol"><a href="/search/?P=CS%201210" title="CS 1210" class="bubblelink code" onclick="return showCourse(this, 'CS 1210');">CS 1210</a></td><td header="undefinedhourscol" class="hourscol">1</td><td header="undefinedcodecol" class="codecol"><a href="/search/?P=CS%203800" title="CS 3800" class="bubblelink code" onclick="return showCourse(this, 'CS 3800');">CS 3800</a></td><td header="undefinedhourscol" class="hourscol">4</td><td header="undefinedcodecol" class="codecol"><a href="/search/?P=EECE%202322" title="EECE 2322" class="bubblelink code" onclick="return showCourse(this, 'EECE 2322');">EECE 2322</a><br/><span style="margin-left:20px;" class="blockindent">and <a href="/search/?P=EECE%202323" title="EECE 2323" class="bubblelink code" onclick="return showCourse(this, 'EECE 2323');">EECE 2323</a></span></td><td header="undefinedhourscol" class="hourscol">5</td><td header="undefinedcodecol" class="codecol">Co-op</td><td header="undefinedhourscol" class="hourscol"></td></tr> <tr class="odd"> <td header="undefinedcodecol" class="codecol"><a href="/search/?P=CS%203500" title="CS 3500" class="bubblelink code" onclick="return showCourse(this, 'CS 3500');">CS 3500</a><br/><span style="margin-left:20px;" class="blockindent">and <a href="/search/?P=CS%203501" title="CS 3501" class="bubblelink code" onclick="return showCourse(this, 'CS 3501');">CS 3501</a></span></td><td header="undefinedhourscol" class="hourscol">5</td><td header="undefinedcodecol" class="codecol">Concentration course</td><td header="undefinedhourscol" class="hourscol">4</td><td header="undefinedcodecol" class="codecol">Elective </td><td header="undefinedhourscol" class="hourscol">4</td><td colspan="2"> </td></tr> <tr class="even"> <td header="undefinedcodecol" class="codecol"><a href="/search/?P=CS%203650" title="CS 3650" class="bubblelink code" onclick="return showCourse(this, 'CS 3650');">CS 3650</a></td><td header="undefinedhourscol" class="hourscol">4</td><td header="undefinedcodecol" class="codecol">Presentation requirement</td><td header="undefinedhourscol" class="hourscol">4</td><td colspan="2"> </td><td colspan="2"> </td></tr> <tr class="odd"> <td header="undefinedcodecol" class="codecol">Concentration course</td><td header="undefinedhourscol" class="hourscol">4</td><td header="undefinedcodecol" class="codecol">Computing and social issues</td><td header="undefinedhourscol" class="hourscol">4</td><td colspan="2"> </td><td colspan="2"> </td></tr> <tr class="even"> <td header="undefinedcodecol" class="codecol">Elective</td><td header="undefinedhourscol" class="hourscol">4</td><td colspan="2"> </td><td colspan="2"> </td><td colspan="2"> </td></tr> <tr class="plangridsum"><td> </td><td class="hourscol">18</td><td> </td><td class="hourscol">16</td><td> </td><td class="hourscol">9</td><td> </td><td class="hourscol">0</td></tr> <tr class="plangridyear"><th colspan="8">Year 3</th></tr><tr class="plangridterm"><th style="width: 20%;">Fall</th><th style="width: 5%;" class="hourscol">Hours</th><th style="width: 20%;">Spring</th><th style="width: 5%;" class="hourscol">Hours</th><th style="width: 20%;">Summer 1</th><th style="width: 5%;" class="hourscol">Hours</th><th style="width: 20%;">Summer 2</th><th style="width: 5%;" class="hourscol">Hours</th></tr> <tr class="even"> <td header="undefinedcodecol" class="codecol">Co-op</td><td header="undefinedhourscol" class="hourscol"></td><td header="undefinedcodecol" class="codecol">Concentration course</td><td header="undefinedhourscol" class="hourscol">4</td><td header="undefinedcodecol" class="codecol"><a href="/search/?P=ENGW%203302" title="ENGW 3302" class="bubblelink code" onclick="return showCourse(this, 'ENGW 3302');">ENGW 3302</a></td><td header="undefinedhourscol" class="hourscol">4</td><td header="undefinedcodecol" class="codecol">Co-op</td><td header="undefinedhourscol" class="hourscol"></td></tr> <tr class="odd"> <td colspan="2"> </td><td header="undefinedcodecol" class="codecol">Khoury elective</td><td header="undefinedhourscol" class="hourscol">4</td><td header="undefinedcodecol" class="codecol">Elective</td><td header="undefinedhourscol" class="hourscol">4</td><td colspan="2"> </td></tr> <tr class="even"> <td colspan="2"> </td><td header="undefinedcodecol" class="codecol">Security course</td><td header="undefinedhourscol" class="hourscol">4</td><td colspan="2"> </td><td colspan="2"> </td></tr> <tr class="odd"> <td colspan="2"> </td><td header="undefinedcodecol" class="codecol">Elective</td><td header="undefinedhourscol" class="hourscol">4</td><td colspan="2"> </td><td colspan="2"> </td></tr> <tr class="plangridsum"><td> </td><td class="hourscol">0</td><td> </td><td class="hourscol">16</td><td> </td><td class="hourscol">8</td><td> </td><td class="hourscol">0</td></tr> <tr class="plangridyear"><th colspan="8">Year 4</th></tr><tr class="plangridterm"><th style="width: 20%;">Fall</th><th style="width: 5%;" class="hourscol">Hours</th><th style="width: 20%;">Spring</th><th style="width: 5%;" class="hourscol">Hours</th><th colspan="2"> </th><th colspan="2"> </th></tr> <tr class="even"> <td header="undefinedcodecol" class="codecol">Co-op</td><td header="undefinedhourscol" class="hourscol"></td><td header="undefinedcodecol" class="codecol"><a href="/search/?P=CS%204530" title="CS 4530" class="bubblelink code" onclick="return showCourse(this, 'CS 4530');">CS 4530</a></td><td header="undefinedhourscol" class="hourscol">4</td><td colspan="2"> </td><td colspan="2"> </td></tr> <tr class="odd"> <td colspan="2"> </td><td header="undefinedcodecol" class="codecol">Concentration course</td><td header="undefinedhourscol" class="hourscol">4</td><td colspan="2"> </td><td colspan="2"> </td></tr> <tr class="even"> <td colspan="2"> </td><td header="undefinedcodecol" class="codecol">Khoury elective</td><td header="undefinedhourscol" class="hourscol">4</td><td colspan="2"> </td><td colspan="2"> </td></tr> <tr class="odd"> <td colspan="2"> </td><td header="undefinedcodecol" class="codecol">Science elective with lab</td><td header="undefinedhourscol" class="hourscol">4</td><td colspan="2"> </td><td colspan="2"> </td></tr> <tr class="plangridsum"><td> </td><td class="hourscol">0</td><td> </td><td class="hourscol">16</td><td> </td><td class="hourscol"></td><td> </td><td class="hourscol"></td></tr> <tr class="plangridtotal lastrow"><td colspan="8">Total Hours: 135</td></tr> </table>
			</div>


         </main>
      </div> <!-- end col-content -->
   </div>
</section>

<footer id="footer">
    <div class="wrap">
        <div class="left">
            <ul class="locations">
                <li><a href="http://www.northeastern.edu/boston" rel="noopener noreferrer" target="_blank">Boston <span class="sr-only">Opens New Window</span></a></li>
                <li><a href="https://arlington.northeastern.edu/" rel="noopener noreferrer" target="_blank">Arlington <span class="sr-only">Opens New Window</span></a></li>
                <li><a href="https://www.burlington.northeastern.edu/" rel="noopener noreferrer" target="_blank">Burlington <span class="sr-only">Opens New Window</span></a></li>
                <li><a href="http://www.northeastern.edu/charlotte/" rel="noopener noreferrer" target="_blank">Charlotte <span class="sr-only">Opens New Window</span></a></li>
                <li><a href="https://www.nchlondon.ac.uk/" rel="noopener noreferrer" target="_blank">London <span class="sr-only">Opens New Window</span></a></li>
                <li><a href="http://www.northeastern.edu/csi/" rel="noopener noreferrer" target="_blank">Nahant <span class="sr-only">Opens New Window</span></a></li>
                <li><a href="https://oakland.northeastern.edu/" rel="noopener noreferrer" target="_blank">Oakland <span class="sr-only">Opens New Window</span></a></li>
                <li><a href="https://roux.northeastern.edu/" rel="noopener noreferrer" target="_blank">Portland <span class="sr-only">Opens New Window</span></a></li>
                <li><a href="https://www.northeastern.edu/bayarea" rel="noopener noreferrer" target="_blank">San Francisco <span class="sr-only">Opens New Window</span></a></li>
                <li><a href="http://www.northeastern.edu/seattle/" rel="noopener noreferrer" target="_blank">Seattle <span class="sr-only">Opens New Window</span></a></li>
                <li><a href="https://www.northeastern.edu/bayarea" rel="noopener noreferrer" target="_blank">Silicon Valley <span class="sr-only">Opens New Window</span></a></li>
                <li><a href="http://www.northeastern.edu/toronto/" rel="noopener noreferrer" target="_blank">Toronto <span class="sr-only">Opens New Window</span></a></li>
                <li><a href="http://www.northeastern.edu/vancouver" rel="noopener noreferrer" target="_blank">Vancouver <span class="sr-only">Opens New Window</span></a></li>
            </ul>
            <hr/>
            <p class="contact">
                <a href="//www.google.com/maps/place/360+Huntington+Ave,+Boston,+MA+02115/@42.339348,-71.0903674,17z/data=!3m1!4b1!4m5!3m4!1s0x89e37a185b1286ff:0x2c025c6d4b00cba2!8m2!3d42.339348!4d-71.0881734" target="_blank">
                    360 Huntington Ave., Boston, Massachusetts 02115 
                    <span class="sr-only">Opens New Window</span>
                </a> 
                <span aria-hidden="true">|</span> 
                <a href="tel:6173732000">617.373.2000</a>
                <span aria-hidden="true">|</span>
                <a href="tel:6173733768">TTY 617.373.3768</a> 
                <span aria-hidden="true">|</span> 
                <a href="https://www.northeastern.edu/emergency-information">Emergency Information</a>
                <br><span class="copy">&copy; 2023-2024 Northeastern University</span>
                <span aria-hidden="true">|</span> 
                <span class="copy"><a href="http://my.northeastern.edu/" target="_blank">myNortheastern <span class="sr-only">Opens New Window</span></a></span>
            </p>
        </div>
        <div class="right">
            <ul class="socials">
                <li><a href="//www.facebook.com/northeastern/" target="_blank">
                        <svg viewbox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <circle cx="256" cy="256" r="256"></circle>
                            <path fill='black' d="m301.6 151.2h36.3v-54.2h-51.4c-29.6 0-68.1 19-68.1 74.2v43h-49.1v56.1h49.1v146h58.6v-146h48.8l8.1-56.1h-56.9v-35.7c0-18.4 9-27.3 24.6-27.3z"></path>
                        </svg>
                        <span class="sr-only">Facebook. Opens New Window</span>
                    </a></li>
                <li><a href="//twitter.com/Northeastern" target="_blank">
                        <svg viewbox="0 0 510.57 510.57" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M255.29,1.43C114.3,1.43,0,115.75,0,256.73S114.3,512,255.29,512,510.57,397.72,510.57,256.73,396.28,1.43,255.29,1.43Zm128.6,203.82c.13,2.76.19,5.53.19,8.33,0,85-64.72,183-183,183a182.12,182.12,0,0,1-98.62-28.89,131.78,131.78,0,0,0,15.34.89,129.07,129.07,0,0,0,79.9-27.53,64.43,64.43,0,0,1-60.09-44.7,62.61,62.61,0,0,0,12.1,1.15,63.61,63.61,0,0,0,17-2.25A64.39,64.39,0,0,1,115,232.22c0-.28,0-.55,0-.83a64.25,64.25,0,0,0,29.15,8.06,64.42,64.42,0,0,1-19.92-85.91,182.61,182.61,0,0,0,132.62,67.21,64.38,64.38,0,0,1,109.62-58.68,128.49,128.49,0,0,0,40.86-15.61A64.52,64.52,0,0,1,379,182.05a128.53,128.53,0,0,0,37-10.13A130.11,130.11,0,0,1,383.89,205.25Z" transform="translate(0 -1.43)">
                            </path>
                        </svg>
                        <span class="sr-only">Twitter. Opens New Window</span>
                    </a></li>
                <li><a href="//www.youtube.com/user/Northeastern" target="_blank">
                        <svg viewbox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <g>
                                <polygon points="221.28 308.14 308.19 256 221.28 203.86 221.28 308.14"></polygon>
                                <path d="M256,0C114.62,0,0,114.61,0,256S114.62,512,256,512,512,397.38,512,256,397.38,0,256,0ZM395,267.22a476.39,476.39,0,0,1-2.79,48s-2.72,20.44-11,29.42c-10.57,11.81-22.41,11.87-27.85,12.58-38.91,3-97.33,3.07-97.33,3.07s-72.29-.71-94.53-3c-6.19-1.23-20.06-.88-30.65-12.67-8.34-9-11-29.42-11-29.42a476.12,476.12,0,0,1-2.79-48v-22.5a475.73,475.73,0,0,1,2.79-48s2.72-20.45,11-29.46c10.57-11.82,22.41-11.89,27.85-12.56,38.9-3,97.27-3,97.27-3h.12s58.37,0,97.27,3c5.42.67,17.28.74,27.85,12.54,8.34,9,11,29.46,11,29.46a476.39,476.39,0,0,1,2.79,48Z"></path>
                            </g>
                        </svg>
                        <span class="sr-only">Youtube. Opens New Window</span>
                    </a></li>
                <li><a href="https://www.linkedin.com/school/northeastern-university/" target="_blank">
                        <svg viewbox="0 0 255 255" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M200.06,188.58V138.81c0-26.67-14.24-39.08-33.22-39.08-15.32,0-22.18,8.43-26,14.34v-12.3H112c.38,8.14,0,86.81,0,86.81h28.85V140.1a19.61,19.61,0,0,1,1-7c2.08-5.18,6.83-10.55,14.79-10.55,10.45,0,14.62,8,14.62,19.63v46.45h28.86ZM81.58,89.92c10.06,0,16.32-6.67,16.32-15-.18-8.51-6.26-15-16.13-15s-16.33,6.47-16.33,15c0,8.34,6.27,15,16,15ZM128.5,256A127.5,127.5,0,1,1,256,128.5,127.51,127.51,0,0,1,128.5,256ZM96,188.58V101.77H67.15v86.81Z" transform="translate(-1 -1)"></path>
                        </svg>
                        <span class="sr-only">Linkedin. Opens New Window</span>
                    </a></li>
                <li><a href="https://www.instagram.com/northeastern/" target="_blank">
                        <svg viewbox="0 0 55 55" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <g>
                                <path d="M27.28,18.51a9.18,9.18,0,1,0,9.32,9.18A9.31,9.31,0,0,0,27.28,18.51Zm0,15.12a5.94,5.94,0,1,1,5.94-5.94A5.94,5.94,0,0,1,27.28,33.63Z"></path>
                                <path d="M36.87,16A2.16,2.16,0,1,0,39,18.11,2.13,2.13,0,0,0,36.87,16Z"></path>
                                <path d="M27.5,0A27.5,27.5,0,1,0,55,27.5,27.5,27.5,0,0,0,27.5,0ZM42,35.25a6.94,6.94,0,0,1-2,5.27,7.38,7.38,0,0,1-5.26,1.89H20a7.62,7.62,0,0,1-5.26-1.89,7.44,7.44,0,0,1-2-5.4V20.27A7.42,7.42,0,0,1,14.59,15a7.42,7.42,0,0,1,5.27-1.89H34.71a7.24,7.24,0,0,1,5.4,2A7.62,7.62,0,0,1,42,20.4Z"></path>
                            </g>
                        </svg>
                        <span class="sr-only">Instagram. Opens New Window</span>
                    </a></li>
                <li><a href="https://www.snapchat.com/add/NortheasternU" target="_blank">
                        <svg viewbox="0 0 256.01 256" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M128.51,0a128,128,0,1,0,128,128A128,128,0,0,0,128.51,0ZM208.1,169.92c-.95,2.23-5.24,5.39-20.25,7.7-1.22.19-1.7,1.79-2.43,5.14-.27,1.22-.54,2.42-.91,3.68a2,2,0,0,1-2.14,1.6h-.19a18.77,18.77,0,0,1-3.36-.42,44.54,44.54,0,0,0-9-1,40.48,40.48,0,0,0-6.51.55c-4.5.75-8.32,3.45-12.37,6.31-5.88,4.16-12,8.45-21.41,8.45-.41,0-.82,0-1.22,0h0c-.26,0-.53,0-.8,0-9.46,0-15.53-4.29-21.4-8.44-4-2.86-7.88-5.57-12.38-6.32a40.48,40.48,0,0,0-6.51-.55,44.33,44.33,0,0,0-9,1,19.77,19.77,0,0,1-3.36.48,2.11,2.11,0,0,1-2.33-1.66c-.38-1.28-.65-2.51-.91-3.7-.67-3.07-1.14-5-2.43-5.16-15-2.32-19.3-5.48-20.25-7.72a2.59,2.59,0,0,1-.23-1,1.69,1.69,0,0,1,1.41-1.76c23.06-3.8,33.4-27.37,33.83-28.37a.3.3,0,0,1,0-.08c1.41-2.86,1.68-5.34.82-7.38-1.58-3.73-6.74-5.37-10.16-6.45-.84-.26-1.63-.51-2.25-.76-6.82-2.7-7.39-5.46-7.12-6.87.46-2.41,3.67-4.08,6.26-4.08a4.49,4.49,0,0,1,1.87.37,19.84,19.84,0,0,0,8.22,2.17c3.29,0,4.73-1.39,4.91-1.57-.09-1.56-.19-3.19-.3-4.87-.68-10.9-1.54-24.45,1.91-32.18,10.34-23.18,32.26-25,38.74-25l2.83,0h.39c6.48,0,28.45,1.8,38.8,25,3.45,7.74,2.6,21.3,1.91,32.19l0,.48c-.1,1.51-.19,3-.27,4.4a6.57,6.57,0,0,0,4.48,1.55h0a20.51,20.51,0,0,0,7.75-2.15,5.84,5.84,0,0,1,2.4-.47,7.39,7.39,0,0,1,2.77.53l0,0c2.31.82,3.83,2.44,3.86,4.14s-1.19,4-7.17,6.36c-.62.24-1.41.49-2.25.76-3.42,1.09-8.58,2.72-10.16,6.45-.86,2-.59,4.52.82,7.38a.3.3,0,0,1,0,.08c.43,1,10.76,24.57,33.83,28.37a1.7,1.7,0,0,1,1.42,1.76A2.77,2.77,0,0,1,208.1,169.92Z" transform="translate(-0.51)"></path>
                        </svg>
                        <span class="sr-only">Snapchat.  Opens New Window</span>
                    </a></li>
            </ul>
            <p>
                <a href="https://www.northeastern.edu/privacy-information" target="_blank">
                    Privacy Policy 
                    <span class="sr-only">Opens New Window</span>
                </a>
            </p>
            </div>
		</div>

		<a href="#header" id="totop"><span class="sr-only">Back to top</span></a>
	</footer>

    <div id="print-dialog" aria-labelledby="dialog-title" class="screen" role="dialog">
       <div class="print-header">
          <button onclick="hidePrintDialog(); return false;" aria-controls="#print-dialog">
             <span class="sr-only">Close this window</span>
          </button>
          <h2 id="dialog-title">Print Options</h2>
       </div>
       <div class="print-body">
          <ul>
             <li>
                <p><a class="option-name" href="#"  role="button" onclick="hidePrintDialog();window.print();return false">Send Page to Printer</a></p>
                <p class="option-desc">Print this page.</p>
             </li>
    
<li><p><a class="option-name" href="/undergraduate/computer-information-science/computer-science/bscs/bscs.pdf" role="button">Download Page (PDF)</a></p><p class="option-desc">The PDF will include all information unique to this page.</p></li><li><p><a class="option-name" href="/pdf/Northeastern University 2023-2024 Undergraduate Day Catalog.pdf" target="_blank">2023-24 Undergraduate Day PDF</a></p></li><li><p><a class="option-name" href="/pdf/Northeastern University 2023-2024 CPS Undergraduate Catalog.pdf" target="_blank">2023-24 CPS Undergraduate PDF</a></p></li><li><p><a class="option-name" href="/pdf/Northeastern University 2023-2024 Graduate Catalog.pdf" target="_blank">2023-24 Graduate/Law PDF</a></p></li><li><p><a class="option-name" href="/pdf/Northeastern University 2023-2024 Course Descriptions.pdf" target="_blank">2023-24 Course Descriptions PDF</a></p></li>          </ul>
       </div>
    </div>




</body>
</html>`;

export default csRequirements;
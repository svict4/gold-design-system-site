import PropTypes from 'prop-types';
import React from 'react';
import Breadcrumbs from "../breadcrumbs";

/**
 * The page component
 */
const Page = ({
	_parents,
	_pages,
	_ID,
	_relativeURL,
	header,
	pagetitle,
	sidenav,
	main,
	footer,
}) => {

	const description = `Documentation to help you ${ pagetitle.toLowerCase() }`;

	const headContent = `
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<meta http-equiv="x-ua-compatible" content="ie=edge">

<link rel="apple-touch-icon" sizes="180x180" href="/assets/favicons/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicons/favicon-16x16.png">
<link rel="manifest" href="/assets/favicons/site.webmanifest">
<link rel="mask-icon" href="/assets/favicons/safari-pinned-tab.svg" color="#06262d">
<link rel="shortcut icon" href="/assets/favicons/favicon.ico">
<meta name="msapplication-config" content="/assets/favicons/browserconfig.xml">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="theme-color" content="#ffffff">
<meta name="robots" content="index, follow">
<meta name="author" content="Digital Transformation Agency">
<meta name="description" content="${ description }">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="GOLD Design System, previously known as the Australian Government Design System">
<meta name="twitter:description" content="${ description }">
<meta name="twitter:name" content="GOLD Design System, previously known as the Australian Government Design System">
<meta name="twitter:image" content="https://gold.designsystemau.org/assets/favicons/designsystem.jpg">
<meta property="og:type" content="website">
<meta property="og:title" content="${ pagetitle } - GOLD Design System, previously known as the Australian Government Design System">
<meta property="og:site_name" content="GOLD Design System, previously known as the Australian Government Design System">
<meta property="og:description" content="${ description }">
<meta property="og:image" content="https://gold.designsystemau.org/assets/favicons/designsystem.jpg">
<meta property="og:url" content="https://gold.designsystemau.org">
<meta name="google-site-verification" content="rd00twS6xfSXiS4gzkLEBfJ3sRmQXz2YBhkCFWTivzI" />

<title>${ pagetitle } - GOLD Design System, previously known as the Australian Government Design System</title>

<link rel="stylesheet" href=${ _relativeURL( '/assets/css/style.css', _ID ) }>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-MHDT7K286L"/>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments)}
gtag('js', new Date());
gtag('config', 'G-MHDT7K286L');
</script>

<!--[if lte IE 9]>
	<script src="${ _relativeURL( '/assets/js/html5shiv.js', _ID ) }"></script>
	<script src="${ _relativeURL( '/assets/js/respond.js', _ID ) }"></script>
<![endif]-->

<script src=${ _relativeURL( '/assets/js/header.js', _ID ) }></script>`;

	return (
		<html>
		<head dangerouslySetInnerHTML={{ __html: headContent }} />

		<body className="au-grid basicpage">
			{ header }
			<div className="page-wrapper">
				<div className="content-wrapper">
					<div className="tier">
						<main tabIndex="-1" id="content" className="main au-body container-fluid">
							<div className="row">
								<div className="col-sm-4 col-sm-push-8">
									{ sidenav }
								</div>
								<div className="col-sm-8 col-sm-pull-4">
									{ _ID === 'get-started'
										? null
										: <Breadcrumbs parents={ _parents } ID={ _ID } relativeURL={ _relativeURL } pages={ _pages } startPath="get-started" />
									}
									<h1 className={
										_ID === 'index' || _ID === '404'
											? 'sronly'
											: '' }>{ pagetitle }</h1>
									{ main }
								</div>

							</div>
						</main>
					</div>
				</div>
				{ footer }
			</div>
			<script src={ _relativeURL( '/assets/js/footer.js', _ID ) } />
			<script src={ _relativeURL( '/assets/js/prism.js', _ID ) } />
		</body>
		</html>
	);
}


Page.propTypes = {
	/**
	 * pagetitle: Homepage
	 */
	pagetitle: PropTypes.string.isRequired,

	/**
	 * header: (partials)(2)
	 */
	header: PropTypes.node.isRequired,

	/**
	 * main: (partials)(4)
	 */
	main: PropTypes.node.isRequired,

	/**
	 * footer: (partials)(2)
	 */
	footer: PropTypes.node.isRequired,
};

Page.defaultProps = {};

export default Page;

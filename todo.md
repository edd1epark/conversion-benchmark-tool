# Project TODO

## Design & Styling
- [x] Set up global styling with purple gradient background
- [x] Configure Tailwind theme colors matching cro-roi-calculator
- [x] Add custom fonts and styling tokens

## Input Form Screen
- [x] Create centered form layout with title and subtitle
- [x] Add monthly traffic input field
- [x] Add monthly conversions input field
- [x] Add primary conversion type dropdown (Demos/Signups)
- [x] Add "See Results" CTA button
- [x] Implement form validation and state management

## Results Screen - Left Side
- [x] Create comparison chart showing user's CVR vs benchmarks
- [x] Display user's conversion rate
- [x] Display B2B SaaS average (2.3%)
- [x] Display top 25% companies (5.3%)
- [x] Show conversion rate gap metrics
- [x] Show gap in number of conversions per month
- [x] Add optional "Find pipeline impact" section
- [x] Add conversion value input field
- [x] Add supporting text for conversion value calculation
- [x] Update metrics with pipeline impact when conversion value entered

## Results Screen - Right Side
- [x] Create CTA section with headline "Convert 30% More in 90 Days, or you don't pay"
- [x] Add subheadline about strategy call
- [x] Integrate Calendly embed widget

## Lead/Revenue Projection Graph
- [x] Create projection graph section below main results
- [x] Add current CVR line
- [x] Add 30% increase CVR line
- [x] Conditionally add benchmark line (B2B average or top 25%)
- [x] Switch to revenue projection when conversion value entered
- [x] Implement proper chart library integration

## Final Polish
- [x] Ensure responsive design
- [x] Test all calculations
- [x] Verify Calendly integration
- [x] Cross-browser testing

## Brand Consistency Updates
- [x] Examine cro-roi-calculator source code for exact styling
- [x] Replace purple gradient with light blue gradient
- [x] Add opacity fading grid background pattern
- [x] Match color scheme and design tokens
- [x] Verify all visual elements match reference project

## Exact CSS Extraction
- [x] Use browser dev tools to inspect body element styling
- [x] Extract exact background gradient values
- [x] Extract exact grid pattern implementation
- [x] Get all color values and CSS custom properties
- [x] Apply exact styling to match pixel-perfect

## Source Code Styling Extraction
- [x] Extract cro-roi-calculator source code
- [x] Analyze index.css for exact styling
- [x] Review visual design summary document
- [x] Apply exact background, colors, and styling
- [x] Match all visual elements perfectly

## Header Restructuring
- [x] Move main headline outside form container
- [x] Move subheadline outside form container
- [x] Remove redundant title from logo area
- [x] Create clearer visual hierarchy

## Form Label Styling Update
- [x] Remove colored backgrounds from form labels
- [x] Update to plain black text
- [x] Maintain clean, professional appearance

## Thermometer/Ladder Chart Visualization
- [x] Replace horizontal progress bars with vertical thermometer chart
- [x] Show all three metrics on single vertical scale
- [x] Add visual markers for each benchmark
- [x] Implement smooth animations

## Fix Thermometer Chart Layout
- [x] Fix overlapping elements in thermometer chart
- [x] Ensure chart fits within container bounds
- [x] Adjust marker positioning to prevent overflow
- [x] Improve responsive layout

## Thermometer Chart Improvements
- [x] Change "Your Rate" label to "Your CVR"
- [x] Make progress fill bottom rounded to match thermometer shape
- [x] Ensure fill aligns with circular bottom

## Replace Legend with Gap Metrics
- [x] Remove redundant legend explaining colors
- [x] Add difference calculations to B2B SaaS average
- [x] Add difference calculations to top 25%
- [x] Make percentage markers on chart more prominent
- [x] Display gaps in the right-side space

## Remove Redundant Sections
- [x] Remove "Your Conversion Rate" section below chart
- [x] Remove "Conversion Rate Gap" section
- [x] Add demos per month metric to gap cards
- [x] Calculate conversion difference in actual numbers

## Remove Empty Space Below Chart
- [x] Remove unnecessary dividers and spacing
- [x] Clean up layout after content removal

## Conversion Value Help Text Improvements
- [x] Remove click-to-reveal functionality
- [x] Make help text always visible
- [x] Add info icon next to conversion value label
- [x] Improve visual hierarchy

## Fix Conversion Value Section Layout
- [x] Remove info icon from "Conversion Value ($)" label
- [x] Add "How can I find my conversion value?" question back
- [x] Add info icon next to the question
- [x] Keep help text always visible below

## Thermometer Chart Usability Fixes
- [x] Hide "Difference to B2B SaaS Average" card when user is above average
- [x] Prevent marker overlap when CVR values are close
- [x] Standardize all marker line lengths to be equal
- [x] Improve marker positioning logic

## Fix Marker Line Lengths and Stacking Order
- [x] Standardize all marker line lengths to be identical
- [x] Fix stacking order logic to sort by actual CVR values
- [x] Ensure markers display in correct vertical order

## Debug Marker Rendering Issues
- [x] Test with actual user values (10000 traffic, 250 conversions = 2.5% CVR)
- [x] Verify all marker lines have identical width and height classes
- [x] Debug stacking order calculation
- [x] Fix any remaining visual inconsistencies

## Fix Marker Overlap Logic
- [x] Remove vertical offset from markers
- [x] Keep line indicators at correct scale positions
- [x] Stack label boxes horizontally (to the right) when overlapping
- [x] Ensure markers always align with scale percentages

## Change Label Stacking to Vertical
- [x] Change horizontal label offset to vertical offset
- [x] Stack labels in a column when markers overlap
- [x] Ensure labels remain readable and don't overlap each other
- [x] Keep line indicators at correct scale positions

## Fix Stacking Logic for Overlapping Markers
- [x] Only stack markers that are actually close to each other
- [x] Top 25% should not move if it's far from other markers
- [x] Reduce spacing between stacked labels (closer together)
- [x] Check each marker pair individually for overlap

## Reduce Stacking Spacing
- [x] Change STACK_SPACING from 30px to smaller value (15-20px)
- [x] Ensure labels remain readable but closer together

## Update Labels and Styling
- [x] Change "DIFFERENCE TO" to "VS." in gap metric cards
- [x] Make percentage values next to chart markers more prominent (larger font, bolder)
- [x] Change "B2B Avg" to "B2B SaaS Average" throughout the application

## Update Demos Per Month Display
- [x] Replace text "N more demos/month needed" with pill-style badge
- [x] Badge should simply say "N demos/month"
- [x] Apply to both gap metric cards (VS. B2B SaaS Average and VS. Top 25%)

## Fix Pill Badge Text Wrapping
- [x] Add whitespace-nowrap to pill badges
- [x] Ensure "N demos/month" stays on single line

## Add Revenue Metrics to Pill Badges
- [x] Check if conversion value is entered
- [x] Calculate revenue impact for gap metrics
- [x] Display revenue alongside demos in pill badges (e.g., "280 demos/month • $1.4M revenue")
- [x] Apply to both gap metric cards

## Update Text Labels and Headlines
- [x] Change "B2B SaaS Average" to "B2B SaaS Avg" in thermometer chart markers
- [x] Change "B2B SaaS Average" to "B2B SaaS Avg" in gap metric card titles
- [x] Update card title from "Your Conversion Rate Analysis" to "Conversion Rate Comparison"
- [x] Add "Your Conversion Rate Analysis" as main page headline on results screen
- [x] Hide original "Compare my Conversion Rate to B2B SaaS Benchmarks" headline on results page
- [x] Hide subheadline on results page

## Fix Chart Layout Overlay Bug (ROLLBACK)
- [x] Rolled back to version b4292667 to restore working chart layout
- [x] Gap metric cards now properly positioned to right of thermometer
- [x] Previous "fix" attempt caused overlay issue - resolved by rollback

## Fix Calendly Height
- [x] Increase Calendly iframe height to 800px
- [x] Make Card component flex column
- [x] Make CardContent flex to fill available space

## Fix Pill Badge Layout with Revenue Metrics
- [x] Split metrics into two separate pill badges (demos on first line, revenue on second line)
- [x] Change revenue metric from per-year to per-month
- [x] Ensure pills wrap properly without breaking card layout
- [x] Apply to both VS. B2B SAAS AVG and VS. TOP 25% cards

## Add 30% CVR Increase Impact Section
- [x] Create section below thermometer chart in ResultsScreen
- [x] Calculate new CVR after 30% increase
- [x] Display new CVR percentage
- [x] Show monthly demos/signups impact
- [x] Show 3-month cumulative impact
- [x] Show 6-month cumulative impact
- [x] Add revenue metrics for monthly, 3-month, and 6-month when conversion value is entered
- [x] Use attractive gradient design consistent with existing sections

## Update Headings and Color Scheme
- [x] Change results page title from "Your Conversion Rate Analysis" to "Your Conversion Rate Report"
- [x] Remove duplicate "Conversion Rate Comparison" heading inside the card
- [x] Update Calendly heading to "Convert 30% More in 90 Days, Fully Guaranteed"
- [x] Update Your CVR color to #F4B4DD (pink) in thermometer chart
- [x] Update Your CVR label background to #F4B4DD
- [x] Update B2B SaaS Avg color to #ADA8E1 (purple) in thermometer chart
- [x] Update B2B SaaS Avg label background to #ADA8E1
- [x] Update Top 25% color to #619CE6 (blue) in thermometer chart
- [x] Update Top 25% label background to #619CE6
- [x] Update VS. B2B SAAS AVG card border/background to match #ADA8E1 theme
- [x] Update VS. TOP 25% card border/background to match #619CE6 theme

## Revert Color Changes (Keep Heading Updates)
- [x] Revert Your CVR color back to original blue
- [x] Revert B2B SaaS Avg color back to original orange
- [x] Revert Top 25% color back to original green
- [x] Revert VS. B2B SAAS AVG card colors back to original orange scheme
- [x] Revert VS. TOP 25% card colors back to original green scheme
- [x] Keep all heading updates (results page title, removed duplicate, Calendly heading)

## Implement New Dynamic Color Scheme
- [x] Set Top 25% color to #09928B (teal)
- [x] Implement logic to determine which is higher: Your CVR or B2B SaaS Avg
- [x] Assign #1B86D6 (blue) to whichever is higher (Your CVR or B2B SaaS Avg)
- [x] Assign #C72660 (pink) to whichever is lower (Your CVR or B2B SaaS Avg)
- [x] Apply dynamic colors to thermometer chart fill
- [x] Apply dynamic colors to thermometer chart markers and labels
- [x] Apply dynamic colors to VS. B2B SAAS AVG card
- [x] Update VS. TOP 25% card to use teal (#09928B) theme

## Update to Fixed Color Scheme
- [x] Set Your CVR color to #5189FB (blue)
- [x] Set B2B SaaS Avg color to #E46BCF (pink)
- [x] Set Top 25% color to #6BE2C4 (turquoise)
- [x] Update thermometer chart fill gradient for Your CVR
- [x] Update all thermometer markers and labels with new colors
- [x] Update VS. B2B SAAS AVG card to use pink theme
- [x] Update VS. TOP 25% card to use turquoise theme
- [x] Remove dynamic color logic (no longer needed)

## Update Top 25% Color
- [x] Change Top 25% color from #6BE2C4 to #06D6A0
- [x] Update color constant in ComparisonChart
- [x] Apply to thermometer chart marker and label
- [x] Apply to VS. TOP 25% card and pill badges

## Lighten VS. Card Backgrounds for Better Contrast
- [x] Lighten VS. B2B SAAS AVG card background (from #FCE4EC to #FFF0F5)
- [x] Lighten VS. TOP 25% card background (from #E0F7F4 to #F0FFFC)
- [x] Ensure better contrast with text and pill badges

## Change VS. Card Pill Badge Text to White
- [x] Change demos/month pill badge text to white in VS. B2B SAAS AVG card
- [x] Change revenue pill badge text to white in VS. B2B SAAS AVG card
- [x] Change demos/month pill badge text to white in VS. TOP 25% card
- [x] Change revenue pill badge text to white in VS. TOP 25% card

## Update Pill Badge Background Colors
- [x] Change VS. B2B SAAS AVG demos/month pill background from #F8BBD0 to #B656A6 (purple)
- [x] Change VS. TOP 25% demos/month pill background from #B2EBF2 to #05AB80 (teal/green)
- [x] Keep revenue pills with existing background colors

## Revert Pill Badge Background Colors
- [x] Revert VS. B2B SAAS AVG demos/month pill background from #B656A6 back to #F8BBD0
- [x] Revert VS. TOP 25% demos/month pill background from #05AB80 back to #B2EBF2

## Update Pill Badge Colors
- [x] Change VS. B2B SAAS AVG demos/month pill from #F8BBD0 to #EFA0DE (pink)
- [x] Change VS. B2B SAAS AVG revenue/month pill from #F8BBD0 to #EFA0DE (pink)
- [x] Change VS. TOP 25% demos/month pill from #B2EBF2 to #5FDABB (mint green)
- [x] Change VS. TOP 25% revenue/month pill from #B2DFDB to #5FDABB (mint green)

## Show Both VS. Cards Always and Add Ratio Metrics
- [x] Remove conditional rendering for VS. B2B SAAS AVG card (currently only shows if user CVR < 2.3%)
- [x] Always show both VS. B2B SAAS AVG and VS. TOP 25% cards regardless of user performance
- [x] Calculate ratio metric (percentage above/below benchmark) for VS. B2B SAAS AVG card
- [x] Calculate ratio metric (percentage above/below benchmark) for VS. TOP 25% card
- [x] Display ratio metric alongside absolute difference (e.g., "35% below average")
- [x] Update text to show "above" or "below" based on user performance

## Fix Thermometer and Graph Line Colors
- [x] Fix thermometer fill bar to match bottom rounded shape when CVR is very low
- [x] Update B2B SaaS Average graph line color in 30% Impact section to #E46BCF (pink) to match chart
- [x] Update Current CVR graph line color in 30% Impact section to #5189FB (blue) to match Your CVR in chart

## Fix Thermometer Fill Bar Overflow
- [x] Add overflow-hidden to thermometer track container to clip fill bar properly
- [x] Ensure fill bar conforms to rounded bottom shape without overflowing

## Fix Thermometer Fill Bar Top Rounding
- [x] Change fill bar from rounded-full to rounded-b-full to only round bottom corners
- [x] Ensure top of fill bar has square edges while bottom remains rounded

## Show B2B SaaS Average Line Always in Projection Graph
- [x] Update ProjectionGraph to always display B2B SaaS Average benchmark line
- [x] Show B2B SaaS Average line even when user CVR is above the average
- [x] Update benchmark line color to always use pink (#E46BCF) for B2B SaaS Average

## Update Logo and Layout Per Reference Image
- [x] Update logo to match Grox branding (slimmer wordmark)
- [x] Make logo clickable linking to https://www.groxweb.com/
- [x] Reduce gap between logo and headline
- [x] Tighten text wrapping on headline and subheadline
- [x] Improve overall visual hierarchy

## Fix Logo and Headline Text Wrap
- [x] Replace incorrect custom logo with actual Grox Logo.svg file
- [x] Reduce max-width of headline container so "B2B SaaS Benchmarks" wraps to next line on desktop
- [x] Ensure logo displays correctly with proper sizing

## Dynamic Conversion Type Labels and Pill Visibility
- [x] Update VS. cards to show "signups/month" when user selects "Signups" as conversion type
- [x] Update VS. cards to show "demos/month" when user selects "Demos" as conversion type
- [x] Hide conversion pill badge when user CVR is above the benchmark (no negative values)
- [x] Only show conversion pill when user is below benchmark and needs improvement

## Responsive Design Improvements
- [x] Keep VS modules next to thermometer chart on all screen sizes except mobile
- [x] Above 1024px: Show Conversion Rate Comparison (left) and Calendly (right) side by side
- [x] Below 1024px: Single column layout with Calendly after projection section
- [x] Handle narrow breakpoints: Wrap percentage values below marker labels
- [x] Reduce font sizes in VS modules for better fit at medium breakpoints
- [x] Wrap text in VS modules as needed to prevent overflow
- [x] Test all breakpoints for proper layout and readability

## Fix Responsive Layout Issues
- [x] Keep VS modules next to thermometer on tablet and desktop (should not wrap to bottom)
- [x] Ensure 1024px breakpoint uses 2-column grid (Comparison + Calendly side by side)
- [x] Prevent thermometer marker labels from overlapping with VS modules
- [x] Make VS modules flexible and responsive with min-width and scaled padding/fonts
- [x] Test at 768px, 1024px, and 1366px breakpoints

## Fix Text Wrapping and 1024px Layout
- [x] Ensure 1024px breakpoint uses 2-column grid layout (lg:grid-cols-2 at 1024px)
- [x] Revert /mo back to /month in pill badges
- [x] Prevent awkward text wrapping in pills with whitespace-nowrap
- [x] Prevent text wrapping in "X% below/above average" text
- [x] Adjust font sizes more carefully (text-xl/md:text-2xl/lg:text-4xl)
- [x] Verified 2-column layout configuration at 1024px breakpoint

## Fix Thermometer Marker Layout and VS Module Sizing
- [x] Mobile (< 768px): Keep conversion metrics NEXT TO markers (flex-row) since VS modules wrap below
- [x] Tablet (768-1024px): Wrap metrics BELOW markers (flex-col) to give VS modules more horizontal space
- [x] Desktop (1024px+): Keep metrics next to markers with optimized spacing
- [x] Prevent marker overlap when wrapped with proper gap spacing (gap-0.5 on md)
- [x] Optimize VS module text sizing to prevent breaking (text-xl/md:text-xl/lg:text-3xl/xl:text-4xl)
- [x] Test at 375px (mobile), 768px (tablet), 1024px (desktop) breakpoints

## Fix 1024px VS Module Text Breaking
- [x] Change marker layout from lg:flex-row to xl:flex-row (keep wrapped until 1280px)
- [x] Keep metrics below markers at 1024px to give VS modules horizontal space
- [x] Metrics should only go inline at 1280px+ when there's enough room
- [x] Verify VS module text no longer breaks at 1024px breakpoint
- [x] Test at 1024px and 1280px to confirm proper layout

## Optimize Thermometer Width to Prevent VS Module Breaking
- [x] Reduce thermometer width at md/lg breakpoints when metrics are wrapped
- [x] Make thermometer narrower (w-64 at md, w-72 at lg) to give VS modules more space
- [x] Ensure VS modules can expand to fill available horizontal space
- [x] Prevent text wrapping in VS modules ("35% below average", "72% below top performers")
- [x] Test at 1024px to verify VS modules display without breaking

## Aggressive Optimization for 1024px VS Module Fix
- [x] Keep thermometer at original width (w-80) per user request
- [x] Reduce VS module font sizes at md/lg dynamically (text-lg at md, text-xl at lg, text-4xl at xl+)
- [x] Reduce VS module padding at md/lg dynamically (p-3 at md/lg, p-6 at xl+)
- [x] Reduce gap between thermometer and VS modules (gap-3 at md, gap-4 at lg, gap-6 at xl+)
- [x] Ensure "35% below average" and "72% below top performers" display on single line
- [x] Ensure "80 demos/month" and "380 demos/month" display without wrapping
- [x] Test at 1024x1366 to verify complete fix

## Fix VS Module Expansion to Fill White Space Gap
- [x] Revert font size reductions - keep text-2xl/text-3xl/text-4xl for readability
- [x] Constrain thermometer container to md:w-80 (fits thermometer exactly)
- [x] Make VS modules expand aggressively with flex-[2] to fill white space
- [x] Ensure VS modules utilize the visible gap between thermometer and modules
- [x] Verify "35% below average" and "72% below top performers" display without breaking
- [x] Test at 1024px to confirm VS modules fill available space

## Investigate and Fix Root Cause of VS Module Width Constraint
- [x] Check ResultsScreen for max-width constraints on Comparison section
- [x] Identified CardContent default px-6 padding as constraint
- [x] Increase VS module flex ratio from flex-[2] to flex-[4] for aggressive expansion
- [x] Reduce CardContent padding at md/lg breakpoints (md:px-3 lg:px-4 xl:px-6)
- [x] Verify VS modules can truly fill available horizontal space
- [x] Test at 1024px to confirm text no longer breaks

## Debug Why Flex-[4] Not Expanding VS Modules
- [x] Identified root cause: thermometer container fixed md:w-80 width not shrinking when metrics wrap
- [x] Changed thermometer container from md:w-80 to md:w-auto to auto-size based on content
- [x] Removed flex-shrink-0 from thermometer to allow proper flex distribution
- [x] Kept min-w-0 on VS modules (required for flex to work)
- [x] VS modules with flex-[4] now expand into freed-up space
- [x] Test at 1024px to verify VS modules finally display without text breaking

## Fix Inner Thermometer Div Responsive Width
- [x] Identified: Inner thermometer div has fixed w-80 (320px) at all breakpoints
- [x] Make inner thermometer responsive: w-56 at md, w-64 at lg, w-80 at xl
- [x] Keep w-80 at xl+ when metrics are inline and need more horizontal space
- [x] This frees up 64-96px of space for VS modules at constrained breakpoints
- [x] Test at 1024px to verify VS modules finally expand without text breaking

## Optimize 768-1023px Breakpoint Range
- [x] Increase gap at md breakpoint to prevent VS module overlap with marker indicators
- [x] Change from md:gap-3 to md:gap-6 for better breathing room
- [x] Gap progression now: gap-4 (base), md:gap-6 (768px), lg:gap-4 (1024px), xl:gap-6 (1280px+)
- [x] Test at 768px to verify no overlap and proper visual balance
- [x] Verify 1024px still works correctly after changes

## Optimize Single-Column Layout (Below 1024px)
- [x] Keep conversion metrics INLINE with markers (flex-row) in single-column layout
- [x] Only wrap metrics below markers (flex-col) at md when in constrained 2-column layout
- [x] Change marker layout: flex-row (base), md:flex-col (768-1023px only), lg:flex-row (1024px+)
- [x] Add max-w-2xl to VS modules in single-column, lg:max-w-none for 2-column
- [x] Gap already optimized: gap-4 (base), md:gap-6 (768-1023px), lg:gap-4, xl:gap-6
- [x] Test at mobile and tablet to verify VS modules no longer look stretched

## Fix VS Module Stretching in Single-Column (Actual Fix)
- [x] Identified issue: md:flex-col was wrapping metrics at 768-1023px (single-column range)
- [x] Changed marker layout: flex-row (0-1023px single-column), lg:flex-col (1024-1279px 2-column), xl:flex-row (1280px+ 2-column)
- [x] Changed VS modules max-width from max-w-2xl to max-w-lg for more restrictive width
- [x] Increased gap in single-column: gap-6 (base/md), lg:gap-4, xl:gap-6
- [x] Test in browser to confirm metrics inline and VS modules at reasonable width

## Fix VS Module Overlap at 768-1024px Range
- [x] VS modules were stretching with flex-[4] causing overlap with conversion metrics
- [x] Changed VS modules container to "hug" content (removed flex-[4], min-w-0, max-w-lg)
- [x] Used w-auto to let VS modules size based on content width
- [x] Increased gap at md breakpoint from gap-6 to md:gap-10 for 768-1024px range
- [x] Gap progression: gap-6 (base), md:gap-10 (768-1024px), lg:gap-4, xl:gap-6
- [x] Test at 768-1024px to verify no overlap and VS modules at reasonable width

## Fix Persistent Overlap with Explicit Margin-Left
- [x] Add explicit margin-left to VS modules container at md breakpoint
- [x] Push VS modules further right to prevent overlap with thermometer markers
- [x] Restore large text sizes (text-2xl/text-3xl/text-4xl) for VS modules at sub-1024px
- [x] Test at 768-1024px to verify no overlap and proper text sizing

## Rollback Broken Layout and Increase Margin-Left
- [x] Rollback to checkpoint 4c12c20d (removed broken flex-based container approach)
- [x] Increase md:ml-8 to md:ml-20 for larger margin at 768-1024px (80px spacing)
- [x] Restore full text sizes (text-2xl/md:text-3xl/lg:text-4xl) for VS modules
- [x] Test at 768-1024px to verify VS modules clear the conversion metrics without overlap
- [x] Verify layout still works at other breakpoints (mobile, 1024px+, 1280px+)

## Optimize 540-768px Layout (sm to md breakpoint)
- [x] Change main container flex direction to sm:flex-row (horizontal at 540px+)
- [x] Keep VS modules next to thermometer at 540-768px range
- [x] Wrap conversion metrics below marker labels (flex-col) at sm breakpoint
- [x] Metrics go back inline (flex-row) at md breakpoint
- [x] Remove md:ml-20 margin since metrics now wrap, preventing overlap
- [x] Test at 540px, 650px, 768px to verify proper layout

## Increase Gap at 768-1024px and Full-Width VS Modules on Mobile
- [x] Increase gap from md:gap-10 to md:gap-16 (64px) for better spacing at 768-1024px
- [x] Add w-full to VS modules container for full-width on mobile (<540px)
- [x] Add sm:w-auto to restore auto-width at 540px+ when side-by-side
- [x] Test at mobile (<540px), 768px, and 1024px to verify improvements

## Keep Metrics Inline at 540-768px and Increase Gap at 768-1024px
- [x] Change metric layout from flex-row sm:flex-col md:flex-row to flex-row md:flex-col lg:flex-row xl:flex-row
- [x] Keep metrics inline at 540-768px (sm) instead of wrapping
- [x] Only wrap metrics at 768-1024px (md) where space is tightest
- [x] Increase gap from md:gap-16 to md:gap-24 (96px) to prevent overlap
- [x] Test at 540px, 768px, 900px, 1024px to verify no overlap between thermometer metrics and VS modules

## Keep Metrics Wrapped at 1024-1280px and Increase Gap
- [x] Change metric layout from flex-row md:flex-col lg:flex-row xl:flex-row to flex-row md:flex-col xl:flex-row
- [x] Keep metrics wrapped (flex-col) at both md (768-1024px) and lg (1024-1280px) ranges
- [x] Only unwrap metrics at xl (1280px+) where there's sufficient space
- [x] Increase lg:gap-4 to lg:gap-12 (48px) for better spacing at 1024-1280px
- [x] Test at 1024px, 1115px, 1200px, 1280px to verify no overlap and proper spacing

## Keep Metrics Inline at 768-1024px and Consistent VS Module Font Sizes
- [x] Change metric layout from flex-row md:flex-col xl:flex-row to flex-row lg:flex-col xl:flex-row
- [x] Keep metrics inline at 768-1024px (md) - don't wrap
- [x] Only wrap metrics at 1024-1280px (lg) where space is tightest
- [x] Keep metrics inline again at 1280px+ (xl)
- [x] Change VS module font sizes from text-2xl md:text-3xl lg:text-4xl to text-4xl (consistent large size)
- [x] Test at 768px, 1024px, 1280px to verify correct wrapping and consistent typography

## Prevent Wrapped Metric Overlap with Dynamic Vertical Offset
- [x] Analyze current getLabelVerticalOffset logic and overlap detection
- [x] Implement breakpoint-aware offset calculation (larger spacing at lg when metrics wrap)
- [x] Use window.innerWidth with resize listener to determine current breakpoint
- [x] Increase vertical offset from 18px to 60px at lg (1024-1280px) to account for wrapped metric height
- [x] Test with close conversion rates (e.g., 2.2%, 2.3%, 2.4%) at lg breakpoint to verify no overlap

## Increase Vertical Offset to Prevent Wrapped Metric Text Overlap
- [x] Increase STACK_SPACING from 60px to 100px at lg breakpoint
- [x] Account for both label height (~40px) and wrapped metric height (~40px) plus spacing
- [x] Test with close conversion rates (1.5% user vs 2.3% avg) to verify no overlap of percentage text
- [x] Verify "Your CVR" label doesn't cover "2.30%" metric from B2B SaaS Avg marker

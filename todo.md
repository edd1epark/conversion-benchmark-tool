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

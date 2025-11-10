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

## Update Headlines and Add Impact Section
- [x] Change results page headline from "Your Conversion Rate Analysis" to "Your Conversion Rate Report"
- [x] Remove duplicate "Conversion Rate Comparison" headline inside the card
- [x] Create "30% CVR Increase Impact" section below the chart
- [x] Show new CVR after 30% increase
- [x] Display monthly demos/signups impact
- [x] Display 3-month cumulative impact
- [x] Display 6-month cumulative impact
- [x] Add revenue metrics for all timeframes when conversion value is entered

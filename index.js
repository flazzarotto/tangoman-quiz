/**
* TangoMan SCRUM Quizz
*
* @author  "Matthias Morin" <matthias.morin@gmail.com>
* @licence  MIT
*/

Vue.filter('capitalize', function(value) {
    return value.toUpperCase()
})

let app = new Vue({ 
    el: '#app',
    computed: {
        isMaxPage() {
            return this.currentPage == this.quiz.length - 1
        }
    },
    methods: {
        next() {
            this.currentPage++
        },
        prev() {
            if (this.currentPage > 0) {
                this.currentPage--
            }
        },
        submit(key) {
            this.submitted.push(key)
        }
    },
    data: {
        currentPage: 0,
        submitted: [],
        quiz: [
        {
            "source": "scrum open",
            "category": null,
            "question": "An organization has decided to adopt Scrum, but management wants to change the terminology to fit with terminology already used. What will likely happen if this is done?",
            "answers": [
            "d"
            ],
            "options": [
            {
                "id": "a",
                "option": "Without a new vocabulary as a reminder of the change, very little change may actually happen."
            },
            {
                "id": "b",
                "option": "The organization may not understand what has changed with Scrum and the benefits of Scrum may be lost."
            },
            {
                "id": "c",
                "option": "Management may feel less anxious."
            },
            {
                "id": "d",
                "option": "All answers apply."
            }
            ],
            "feedback": null
        },
        {
            "source": "scrum open",
            "category": null,
            "question": "During a Sprint, a Development Team determines that it will not be able to finish the complete forecast. Who should be present to review and adjust the Sprint work selected?",
            "answers": [
            "b"
            ],
            "options": [
            {
                "id": "a",
                "option": "The Scrum Master, the project manager and the Development Team."
            },
            {
                "id": "b",
                "option": "The Product Owner and the Development Team."
            },
            {
                "id": "c",
                "option": "The Product Owner and all stakeholders."
            },
            {
                "id": "d",
                "option": "The Development Team."
            }
            ],
            "feedback": "During the Sprint, scope may be clarified and re-negotiated between the Product Owner and Development Team as more is learned."
        },
        {
            "source": "scrum open",
            "category": null,
            "question": "The Development Team should not be interrupted during the Sprint. The Sprint Goal should remain intact. These are conditions that foster creativity, quality and productivity. Based on this, which of the following is FALSE?",
            "answers": [
            "b"
            ],
            "options": [
            {
                "id": "a",
                "option": "The Product Owner can help clarify or optimize the Sprint when asked by the Development Team."
            },
            {
                "id": "b",
                "option": "The Sprint Backlog is fully formulated in the Sprint Planning meeting and does not change during the Sprint."
            },
            {
                "id": "c",
                "option": "As a decomposition of the selected Product Backlog Items, the Sprint Backlog changes and may grow as the work emerges."
            },
            {
                "id": "d",
                "option": "The Development Team may work with the Product Owner to remove or add work if it finds it has more or less capacity than it expected."
            }
            ],
            "feedback": "The Sprint Backlog makes visible all of the work that the Development Team identifies as necessary to meet the Sprint Goal. The Development Team modifies the Sprint Backlog throughout the Sprint, and the Sprint Backlog emerges during the Sprint."
        },
        {
            "source": "scrum open",
            "category": null,
            "question": "True or False: The Scrum Team should choose at least one high priority process improvement, identified during the Sprint Retrospective, and place it in the Product Backlog.",
            "answers": [
            "b"
            ],
            "options": [
            {
                "id": "a",
                "option": "True"
            },
            {
                "id": "b",
                "option": "False"
            }
            ],
            "feedback": "False, to ensure continuous improvement, the Sprint Backlog rather than the Product Backlog includes at least one high priority process improvement identified in the previous Sprint Retrospective meeting."
        },
        {
            "source": "scrum open",
            "category": null,
            "question": "When many Development Teams are working on a single product, what best describes the definition of “Done?”",
            "answers": [
            "c"
            ],
            "options": [
            {
                "id": "a",
                "option": "Each Development Team defines and uses its own. The differences are discussed and reconciled during a hardening Sprint."
            },
            {
                "id": "b",
                "option": "Each Development Team uses its own but must make their definition clear to all other teams so the differences are known."
            },
            {
                "id": "c",
                "option": "All Development Teams must have a definition of “Done” that makes their combined work potentially releasable."
            },
            {
                "id": "d",
                "option": "It depends."
            }
            ],
            "feedback": "Scrum requires an Increment to be releasable. This is an Increment of product. Many teams working on a single product are expected to deliver such an Increment."
        },
        {
            "source": "scrum open",
            "category": null,
            "question": "When multiple teams work together on the same product, each team should maintain a separate Product Backlog.",
            "answers": [
            "b"
            ],
            "options": [
            {
                "id": "a",
                "option": "True"
            },
            {
                "id": "b",
                "option": "False"
            }
            ],
            "feedback": "Products have one Product Backlog, regardless of how many teams are used. Any other setup makes it difficult for the Development Team to determine what it should work on."
        },
        {
            "source": "scrum open",
            "category": null,
            "question": "Who should know the most about the progress toward a business objective or a release, and be able to explain the alternatives most clearly?",
            "answers": [
            "a"
            ],
            "options": [
            {
                "id": "a",
                "option": "The Product Owner"
            },
            {
                "id": "b",
                "option": "The Development Team"
            },
            {
                "id": "c",
                "option": "The Scrum Master"
            },
            {
                "id": "d",
                "option": "The Project Manager"
            }
            ],
            "feedback": "The Product Owner is the sole person responsible for managing the Product Backlog, which includes that the Product Backlog is visible, transparent, and clear to all, and shows what the Scrum Team will work on next."
        },
        {
            "source": "scrum open",
            "category": null,
            "question": "Development Team membership should change:",
            "answers": [
            "c"
            ],
            "options": [
            {
                "id": "a",
                "option": "Every Sprint to promote shared learning."
            },
            {
                "id": "b",
                "option": "Never, because it reduces productivity."
            },
            {
                "id": "c",
                "option": "As needed, while taking into account a short term reduction in productivity."
            },
            {
                "id": "d",
                "option": "As needed, with no special allowance for changes in productivity."
            }
            ],
            "feedback": "Teams typically go through some steps before achieving a state of increased performance. Changing membership typically reduces cohesion, affecting performance and productivity in the short term."
        },
        {
            "source": "scrum open",
            "category": null,
            "question": "How much work must a Development Team do to a Product Backlog item it selects for a Sprint?",
            "answers": [
            "a"
            ],
            "options": [
            {
                "id": "a",
                "option": "As much as it has told the Product Owner will be done for every Product Backlog item it selects in conformance with the definition of “Done”."
            },
            {
                "id": "b",
                "option": "As much as it can fit into the Sprint."
            },
            {
                "id": "c",
                "option": "All development work and at least some testing."
            },
            {
                "id": "d",
                "option": "Analysis, design, programming, testing and documentation."
            }
            ],
            "feedback": "The purpose of each Sprint is to deliver Increments of potentially releasable functionality that adhere to the Scrum Team’s current definition of “Done”."
        },
        {
            "source": "scrum open",
            "category": null,
            "question": "It is mandatory that the product increment be released to production at the end of each Sprint.",
            "answers": [
            "b"
            ],
            "options": [
            {
                "id": "a",
                "option": "True"
            },
            {
                "id": "b",
                "option": "False"
            }
            ],
            "feedback": "The product increment should be usable and releasable at the end of every Sprint, but it does not have to be released."
        },
        {
            "source": "scrum open",
            "category": null,
            "question": "Scrum does not have a role called “project manager.”",
            "answers": [
            "a"
            ],
            "options": [
            {
                "id": "a",
                "option": "True"
            },
            {
                "id": "b",
                "option": "False"
            }
            ],
            "feedback": "A Scrum Team has a Scrum Master, a Product Owner and a Development Team. As a whole they have all controls needed."
        },
        {
            "source": "scrum open",
            "category": null,
            "question": "The CEO asks the Development Team to add a “very important” item to a Sprint that is in progress. What should the Development Team do?",
            "answers": [
            "d"
            ],
            "options": [
            {
                "id": "a",
                "option": "Add the item to the current Sprint without any adjustments."
            },
            {
                "id": "b",
                "option": "Add the item to the current Sprint and drop an item of equal size."
            },
            {
                "id": "c",
                "option": "Add the item to the next Sprint."
            },
            {
                "id": "d",
                "option": "Inform the Product Owner so he/she can work with the CEO."
            }
            ],
            "feedback": "The items selected for a Sprint have been selected as most valuable with the Product Owner. The items serve the Sprint’s goal. No changes should be made that endanger the Sprint Goal. No one external to the Scrum Team can force changes on the Development Team (Sprint Backlog) and the Product Owner (Product Backlog)."
        },
        {
            "source": "scrum open",
            "category": null,
            "question": "The Development Team should have all the skills needed to:",
            "answers": [
            "c"
            ],
            "options": [
            {
                "id": "a",
                "option": "Complete the project as estimated when the date and cost are committed to the Product Owner."
            },
            {
                "id": "b",
                "option": "Do all of the development work, except for specialized testing that requires additional tools and environments."
            },
            {
                "id": "c",
                "option": "Turn the Product Backlog items it selects into an increment of potentially releasable product functionality."
            }
            ],
            "feedback": "The Development Team consists of professionals who do the work of delivering a potentially releasable Increment of “Done” product at the end of each Sprint. Development Teams are cross-functional, with all of the skills as a team necessary to create a product Increment."
        },
        {
            "source": "scrum open",
            "category": null,
            "question": "The length of a Sprint should be:",
            "answers": [
            "d"
            ],
            "options": [
            {
                "id": "a",
                "option": "Short enough to keep the business risk acceptable to the Product Owner."
            },
            {
                "id": "b",
                "option": "Short enough to be able to synchronize the development work with other business events."
            },
            {
                "id": "c",
                "option": "No more than one month."
            },
            {
                "id": "d",
                "option": "All of these answers are correct."
            }
            ],
            "feedback": "All of these choices are appropriate considerations in determining the length of a Sprint."
        },
        {
            "source": "scrum open",
            "category": null,
            "question": "The maximum length of the Sprint Review (its time-box) is:",
            "answers": [
            "b"
            ],
            "options": [
            {
                "id": "a",
                "option": "2 hours."
            },
            {
                "id": "b",
                "option": "4 hours for a monthly Sprint. For shorter Sprints it is usually shorter."
            },
            {
                "id": "c",
                "option": "As long as needed."
            },
            {
                "id": "d",
                "option": "1 day."
            },
            {
                "id": "e",
                "option": "4 hours and longer as needed."
            }
            ],
            "feedback": "Sprint Review is a four-hour time-boxed meeting for one-month Sprints. For shorter Sprints, the event is usually shorter."
        },
        {
            "source": "scrum open",
            "category": null,
            "question": "The Product Backlog is ordered by:",
            "answers": [
            "e"
            ],
            "options": [
            {
                "id": "a",
                "option": "Size, where small items are at the top and large items are at the bottom."
            },
            {
                "id": "b",
                "option": "Risk, where safer items are at the top, and riskier items are at the bottom."
            },
            {
                "id": "c",
                "option": "Least valuable items at the top to most valuable at the bottom."
            },
            {
                "id": "d",
                "option": "Items are randomly arranged."
            },
            {
                "id": "e",
                "option": "Whatever is deemed most appropriate by the Product Owner."
            }
            ],
            "feedback": "The Product Owner decides what makes the most sense to optimize the value of the work being done by the Development Team."
        },
        {
            "source": "scrum open",
            "category": null,
            "question": "The purpose of a Sprint is to produce a done increment of working product.",
            "answers": [
            "a"
            ],
            "options": [
            {
                "id": "a",
                "option": "True"
            },
            {
                "id": "b",
                "option": "False"
            }
            ],
            "feedback": "The heart of Scrum is a Sprint, a time-box of one month or less during which a “Done”, usable, and potentially releasable product Increment is created."
        },
        {
            "source": "scrum open",
            "category": null,
            "question": "The three pillars of empirical process control are:",
            "answers": [
            "c"
            ],
            "options": [
            {
                "id": "a",
                "option": "Respect For People, Kaizen, Eliminating Waste"
            },
            {
                "id": "b",
                "option": "Planning, Demonstration, Retrospective"
            },
            {
                "id": "c",
                "option": "Inspection, Transparency, Adaptation"
            },
            {
                "id": "d",
                "option": "Planning, Inspection, Adaptation"
            },
            {
                "id": "e",
                "option": "Transparency, Eliminating Waste, Kaizen"
            }
            ],
            "feedback": "Scrum is founded on empirical process control theory, or empiricism. Empiricism asserts that knowledge comes from experience and making decisions based on what is known. Three pillars uphold every implementation of empirical process control: transparency, inspection, and adaptation."
        },
        {
            "source": "scrum open",
            "category": null,
            "question": "The time-box for a Daily Scrum is?",
            "answers": [
            "d"
            ],
            "options": [
            {
                "id": "a",
                "option": "The same time of day every day."
            },
            {
                "id": "b",
                "option": "Two minutes per person."
            },
            {
                "id": "c",
                "option": "4 hours."
            },
            {
                "id": "d",
                "option": "15 minutes."
            },
            {
                "id": "e",
                "option": "15 minutes for a 4 week sprint. For shorter Sprints it is usually shorter."
            }
            ],
            "feedback": "The length of a daily Scrum is time-boxed at 15 minutes, it does not change with the length of a Sprint."
        },
        {
            "source": "scrum open",
            "category": null,
            "question": "The time-box for the Sprint Planning meeting is?",
            "answers": [
            "b"
            ],
            "options": [
            {
                "id": "a",
                "option": "4 hours."
            },
            {
                "id": "b",
                "option": "8 hours for a monthly Sprint. For shorter Sprints it is usually shorter."
            },
            {
                "id": "c",
                "option": "Whenever it is done."
            },
            {
                "id": "d",
                "option": "Monthly."
            }
            ],
            "feedback": "Sprint Planning is time-boxed to a maximum of eight hours for a one-month Sprint. For shorter Sprints, the event is usually shorter."
        },
        {
            "source": "scrum open",
            "category": null,
            "question": "Upon what type of process control is Scrum based?",
            "answers": [
            "a"
            ],
            "options": [
            {
                "id": "a",
                "option": "Empirical"
            },
            {
                "id": "b",
                "option": "Hybrid"
            },
            {
                "id": "c",
                "option": "Defined"
            },
            {
                "id": "d",
                "option": "Complex"
            }
            ],
            "feedback": "Scrum is founded on empirical process control theory, or empiricism. Empiricism asserts that knowledge comes from experience and making decisions based on what is known."
        },
        {
            "source": "scrum open",
            "category": null,
            "question": "What are the two primary ways a Scrum Master keeps a Development Team working at its highest level of productivity?",
            "answers": [
            "a",
            "b"
            ],
            "options": [
            {
                "id": "a",
                "option": "By facilitating Development Team decisions"
            },
            {
                "id": "b",
                "option": "By removing impediments that hinder the Development Team"
            },
            {
                "id": "c",
                "option": "By starting and ending the meetings at the proper time"
            },
            {
                "id": "d",
                "option": "By keeping high value features high in the Product Backlog You did not select all available correct options."
            }
            ],
            "feedback": "A Scrum Master is a servant-leader for the Development Team. Facilitation and removing impediments serves a team in achieving the best productivity possible."
        },
        {
            "source": "scrum open",
            "category": null,
            "question": "What does it mean to say that an event has a time-box?",
            "answers": [
            "d"
            ],
            "options": [
            {
                "id": "a",
                "option": "The event must happen at a set time."
            },
            {
                "id": "b",
                "option": "The event must happen by a given time."
            },
            {
                "id": "c",
                "option": "The event must take at least a minimum amount of time."
            },
            {
                "id": "d",
                "option": "The event can take no more than a maximum amount of time."
            }
            ],
            "feedback": "Time-boxed events are events that have a maximum duration."
        },
        {
            "source": "scrum open",
            "category": null,
            "question": "What is the main reason for the Scrum Master to be at the Daily Scrum?",
            "answers": [
            "b"
            ],
            "options": [
            {
                "id": "a",
                "option": "To make sure every team member answers the three questions."
            },
            {
                "id": "b",
                "option": "He or she does not have to be there; he or she only has to ensure the Development Team has a Daily Scrum."
            },
            {
                "id": "c",
                "option": "To write down any changes to the Sprint Backlog, including adding new items, and tracking progress on the burn-down."
            },
            {
                "id": "d",
                "option": "To gather status and progress information to report to management."
            }
            ],
            "feedback": "The Scrum Master enforces the rule that only Development Team members participate in the Daily Scrum."
        },
        {
            "source": "scrum open",
            "category": null,
            "question": "What is the recommended size for a Development Team (within the Scrum Team)?",
            "answers": [
            "b"
            ],
            "options": [
            {
                "id": "a",
                "option": "Minimal 7"
            },
            {
                "id": "b",
                "option": "3 to 9"
            },
            {
                "id": "c",
                "option": "7 plus or minus 2"
            },
            {
                "id": "d",
                "option": "9"
            }
            ],
            "feedback": "Optimal Development Team size is small enough to remain nimble and large enough to complete significant work. Fewer than three Development Team members decreases interaction and results in smaller productivity gains. More than nine members simply requires too much coordination."
        },
        {
            "source": "scrum open",
            "category": null,
            "question": "What is the role of Management in Scrum?",
            "answers": [
            "c"
            ],
            "options": [
            {
                "id": "a",
                "option": "Continually monitor staffing levels of the Development Team."
            },
            {
                "id": "b",
                "option": "Monitor the Development Team’s productivity."
            },
            {
                "id": "c",
                "option": "Support the Product Owner with insights and information into high value product and system capabilities. Support the Scrum Master to cause organizational change that fosters empiricism, self-organization, bottom-up intelligence, and intelligent release of software."
            },
            {
                "id": "d",
                "option": "Identify and remove people that aren’t working hard enough."
            }
            ],
            "feedback": "Management has no active role in the actual product development through Scrum. However, management external to the Scrum team is incredibly important in setting the vision and strategy to guide the overall direction of the organization."
        },
        {
            "source": "scrum open",
            "category": null,
            "question": "When does a Development Team member become the sole owner of a Sprint Backlog item?",
            "answers": [
            "b"
            ],
            "options": [
            {
                "id": "a",
                "option": "At the Sprint planning meeting."
            },
            {
                "id": "b",
                "option": "Never. All Sprint Backlog Items are “owned” by the entire Development Team, even though each one may be implemented by an individual development team member."
            },
            {
                "id": "c",
                "option": "Whenever a team member can accommodate more work."
            },
            {
                "id": "d",
                "option": "During the Daily Scrum."
            }
            ],
            "feedback": "Sprint Backlog and all of its items are collectively owned by the Development Team. No individual team member can claim ownership over an item as this would block communication and collaboration."
        },
        {
            "source": "scrum open",
            "category": null,
            "question": "When does the next Sprint begin?",
            "answers": [
            "d"
            ],
            "options": [
            {
                "id": "a",
                "option": "Next Monday."
            },
            {
                "id": "b",
                "option": "Immediately following the next Sprint Planning."
            },
            {
                "id": "c",
                "option": "When the Product Owner is ready."
            },
            {
                "id": "d",
                "option": "Immediately after the conclusion of the previous Sprint."
            }
            ],
            "feedback": "A new Sprint starts immediately after the conclusion of the previous Sprint."
        },
        {
            "source": "scrum open",
            "category": null,
            "question": "When is a Sprint over?",
            "answers": [
            "d"
            ],
            "options": [
            {
                "id": "a",
                "option": "When all Product Backlog items meet their definition of done."
            },
            {
                "id": "b",
                "option": "When the Product Owner says it is done."
            },
            {
                "id": "c",
                "option": "When all the tasks are completed."
            },
            {
                "id": "d",
                "option": "When the time-box expires."
            }
            ],
            "feedback": "The duration of a Sprint is fixed and cannot be shortened or lengthened."
        },
        {
            "source": "scrum open",
            "category": null,
            "question": "When might a Sprint be abnormally cancelled?",
            "answers": [
            "d"
            ],
            "options": [
            {
                "id": "a",
                "option": "When it becomes clear that not everything will be finished by the end of the Sprint."
            },
            {
                "id": "b",
                "option": "When the Development Team feels that the work is too hard."
            },
            {
                "id": "c",
                "option": "When the sales department has an important new opportunity."
            },
            {
                "id": "d",
                "option": "When the Sprint Goal becomes obsolete."
            }
            ],
            "feedback": "A Sprint can be cancelled before the Sprint time-box is over. A Sprint would be cancelled if the Sprint Goal becomes obsolete. This might occur if the company changes direction or if market or technology conditions change."
        },
        {
            "source": "scrum open",
            "category": null,
            "question": "Which of the below are roles on a Scrum Team?",
            "answers": [
            "a",
            "d",
            "e"
            ],
            "options": [
            {
                "id": "a",
                "option": "Development Team"
            },
            {
                "id": "b",
                "option": "Users"
            },
            {
                "id": "c",
                "option": "Customers"
            },
            {
                "id": "d",
                "option": "Product Owner"
            },
            {
                "id": "e",
                "option": "Scrum Master"
            }
            ],
            "feedback": "The Scrum Team consists of a Product Owner, the Development Team, and a Scrum Master."
        },
        {
            "source": "scrum open",
            "category": null,
            "question": "Which of the following services are appropriate for a Scrum Master in regard to the Daily Scrum?",
            "answers": [
            "d"
            ],
            "options": [
            {
                "id": "a",
                "option": "Lead the discussions of the Development Team."
            },
            {
                "id": "b",
                "option": "Ensure that all 3 questions have been answered."
            },
            {
                "id": "c",
                "option": "Facilitate in a way that ensures each team member has a chance to speak."
            },
            {
                "id": "d",
                "option": "Teach the Development Team to keep the Daily Scrum within the 15 minute time-box."
            },
            {
                "id": "e",
                "option": "All answers apply."
            }
            ],
            "feedback": "The Scrum Master ensures that the Development Team has the meeting, but the Development Team is responsible for conducting the Daily Scrum. The Scrum Master teaches the Development Team to keep the Daily Scrum within the 15-minute time-box. The Scrum Master enforces the rule that only Development Team members participate in the Daily Scrum."
        },
        {
            "source": "scrum open",
            "category": null,
            "question": "Which statement best describes a Product Owner’s responsibility?",
            "answers": [
            "a"
            ],
            "options": [
            {
                "id": "a",
                "option": "Optimizing the value of the work the Development Team does."
            },
            {
                "id": "b",
                "option": "Directing the Development Team."
            },
            {
                "id": "c",
                "option": "Managing the project and ensuring that the work meets the commitments to the stakeholders."
            },
            {
                "id": "d",
                "option": "Keeping stakeholders at bay."
            }
            ],
            "feedback": "The Product Owner is responsible for maximizing the value of the product and the work of the Development Team."
        },
        {
            "source": "scrum open",
            "category": null,
            "question": "Which statement best describes Scrum?",
            "answers": [
            "c"
            ],
            "options": [
            {
                "id": "a",
                "option": "A complete methodology that defines how to develop software."
            },
            {
                "id": "b",
                "option": "A cookbook that defines best practices for software development."
            },
            {
                "id": "c",
                "option": "A framework within which complex products in complex environments are developed."
            },
            {
                "id": "d",
                "option": "A defined and predictive process that conforms to the principles of Scientific Management."
            }
            ],
            "feedback": "Scrum is not a process or a technique for building products; rather, it is a framework within which you can employ various processes and techniques."
        },
        {
            "source": "scrum open",
            "category": null,
            "question": "Which statement best describes the Sprint Review?",
            "answers": [
            "b"
            ],
            "options": [
            {
                "id": "a",
                "option": "It is a mechanism to control the Development Team’s activities during a Sprint."
            },
            {
                "id": "b",
                "option": "It is when the Scrum Team and stakeholders inspect the outcome of a Sprint and figure out what to do next."
            },
            {
                "id": "c",
                "option": "It is a demo at the end of the Sprint for everyone in the organization to check on the work done."
            }
            ],
            "feedback": "Every event in Scrum, besides the Sprint which is a container for the other events, is an opportunity to Inspect AND Adapt."
        },
        {
            "source": "scrum open",
            "category": null,
            "question": "Which two things does the Development Team do during the first Sprint?",
            "answers": [
            "a",
            "c"
            ],
            "options": [
            {
                "id": "a",
                "option": "Deliver an increment of potentially releasable software."
            },
            {
                "id": "b",
                "option": "Determine the complete architecture and infrastructure for the product."
            },
            {
                "id": "c",
                "option": "Develop and deliver at least one piece of functionality."
            },
            {
                "id": "d",
                "option": "Develop a plan for the rest of the release."
            },
            {
                "id": "e",
                "option": "Create the complete Product Backlog to be developed in subsequent Sprints."
            }
            ],
            "feedback": "The heart of Scrum is a Sprint, a time-box of one month or less during which a “Done”, useable, and potentially releasable product Increment is created. This applies to every Sprint."
        },
        {
            "source": "scrum open",
            "category": null,
            "question": "Who creates the definition of “Done”?",
            "answers": [
            "a"
            ],
            "options": [
            {
                "id": "a",
                "option": "The development organization (or Development Team if none is available from the development organization)"
            },
            {
                "id": "b",
                "option": "The Scrum Team, in a collaborative effort where the result is the common denominator of all members’ definitions"
            },
            {
                "id": "c",
                "option": "The Product Owner as he/she is responsible for the product’s success"
            },
            {
                "id": "d",
                "option": "The Scrum Master as he/she is responsible for the Development Team’s productivity"
            }
            ],
            "feedback": "If the definition of “done” is part of the conventions, standards or guidelines of the development organization, all Scrum Teams must follow it as a minimum. The Development Team of the Scrum Team can complement it with elements specific for the product or context. If “done” for an increment is not a convention of the development organization, the Development Team of the Scrum Team must define a definition of “done” appropriate for the product."
        },
        {
            "source": "scrum open",
            "category": null,
            "question": "Who has the final say on the order of the Product Backlog?",
            "answers": [
            "d"
            ],
            "options": [
            {
                "id": "a",
                "option": "The Stakeholders"
            },
            {
                "id": "b",
                "option": "The Development Team"
            },
            {
                "id": "c",
                "option": "The Scrum Master"
            },
            {
                "id": "d",
                "option": "The Product Owner"
            },
            {
                "id": "e",
                "option": "The CEO"
            }
            ],
            "feedback": "The Product Owner is the sole person responsible for managing the Product Backlog."
        },
        {
            "source": "scrum open",
            "category": null,
            "question": "Who is on the Scrum Team?",
            "answers": [
            "a",
            "b",
            "c"
            ],
            "options": [
            {
                "id": "a",
                "option": "The Scrum Master"
            },
            {
                "id": "b",
                "option": "The Product Owner"
            },
            {
                "id": "c",
                "option": "The Development Team"
            },
            {
                "id": "d",
                "option": "Project Manager"
            },
            {
                "id": "e",
                "option": "None of the above"
            }
            ],
            "feedback": "The Scrum Team consists of the Scrum Master (manages the process), the Product Owner (decides what to do) and the Development Team (does the work)."
        },
        {
            "source": "scrum open",
            "category": null,
            "question": "Who is required to attend the Daily Scrum?",
            "answers": [
            "a"
            ],
            "options": [
            {
                "id": "a",
                "option": "The Development Team."
            },
            {
                "id": "b",
                "option": "The Scrum team."
            },
            {
                "id": "c",
                "option": "The Development Team and Scrum Master."
            },
            {
                "id": "d",
                "option": "The Development Team and Product Owner."
            },
            {
                "id": "e",
                "option": "The Scrum Master and Product Owner."
            }
            ],
            "feedback": "Only the people doing the work described on the Sprint Backlog need to inspect and adapt at the Daily Scrum. If the Scrum Master or Product Owner is also on the Development Team, they will need to be at the Daily Scrum. Otherwise, the Scrum Master simply has to make sure the Development Team knows how to conduct a Daily Scrum and does so."
        },
        {
            "source": "scrum open",
            "category": null,
            "question": "Who is responsible for managing the progress of work during a Sprint?",
            "answers": [
            "a"
            ],
            "options": [
            {
                "id": "a",
                "option": "The Development Team"
            },
            {
                "id": "b",
                "option": "The Scrum Master"
            },
            {
                "id": "c",
                "option": "The Product Owner"
            },
            {
                "id": "d",
                "option": "The most junior member of the Team"
            }
            ],
            "feedback": "The Development Team uses the Daily Scrum to inspect progress toward the Sprint Goal and to inspect how progress is trending toward completing the work in the Sprint Backlog."
        },
        {
            "source": "scrum open",
            "category": null,
            "question": "Why is the Daily Scrum held at the same time and same place?",
            "answers": [
            "b"
            ],
            "options": [
            {
                "id": "a",
                "option": "The place can be named."
            },
            {
                "id": "b",
                "option": "The consistency reduces complexity."
            },
            {
                "id": "c",
                "option": "The Product Owner demands it."
            },
            {
                "id": "d",
                "option": "Rooms are hard to book and this lets it be booked in advance."
            }
            ],
            "feedback": "The Daily Scrum is held at the same time and place each day to reduce complexity."
        }
        ]
    }
});

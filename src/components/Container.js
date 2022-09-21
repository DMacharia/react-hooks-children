import React from "react";

function Container({
	header,
	children,
	textPosition = "", // possible values: left, right, center
	direction = "horizontal", // possible values: vertical, horizontal
	contentPosition = "center", // possible values: left, right, center
}) {
	return (
		<div className={`container ${textPosition}`}>
			{header ? <h2>{header}</h2> : null}

			<div className={`container-children ${direction} ${contentPosition}`}>
				{children}
			</div>
		</div>
	);
}
////method 1 refactored once
// function Container(props) {
//     const { header,
//         children,
//         textPosition = "", // possible values: left, right, center
//         direction = "horizontal", // possible values: vertical, horizontal
//         contentPosition = "center", // possible values: left, right, center
//       } = props
//     return (
//       <div className={`container ${textPosition}`}>
//         {header ? <h2>{header}</h2> : null}

//         <div className={`container-children ${direction} ${contentPosition}`}>
//           {children}
//         </div>
//       </div>
//     );
//   }

////method 1 refactored
//   function Container(props) {
//        return (
//       <div className={`container ${props.textPosition}`}>
//         {props.header ? <h2>{props.header}</h2> : null}

//         <div className={`container-children ${props.direction} ${props.contentPosition}`}>
//           {props.children}
//         </div>
//       </div>
//     );
//   }

export default Container;

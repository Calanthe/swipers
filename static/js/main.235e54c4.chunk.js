(this.webpackJsonpswipers = this.webpackJsonpswipers || []).push([
	[0],
	{
		17: function (e, i, t) {
			e.exports = t(31);
		},
		22: function (e, i, t) {},
		31: function (e, i, t) {
			"use strict";
			t.r(i);
			var n = t(0),
				s = t.n(n),
				o = t(8),
				a = t.n(o),
				r = (t(22), t(9)),
				l = t(1),
				c = t(10),
				p = "UPDATE_CELLS",
				u = "SET_ACTIVE_TYPE",
				h = "RESTART_LEVEL",
				m = "RESTART_GAME",
				v = "SET_NEXT_LEVEL",
				y = 9,
				d = 9,
				f = 100,
				T = {
					1: "primary",
					2: "secondary",
					3: "tertiary",
					4: "quaternary",
					100: "wall",
				};
			var E = [
				[
					{
						positionX: 4,
						positionY: 1,
						type: 1,
						isFinishTile: !0,
						hint: "Use arrows or WASD to move the blue tile to the finish one.",
					},
					{ positionX: 4, positionY: 6, type: 1, isFinishTile: !1 },
				],
				[
					{
						positionX: 0,
						positionY: 8,
						type: 1,
						isFinishTile: !0,
						hint:
							"You will get maximum points if all of the blue tiles reach finish tile in the same move.",
					},
					{ positionX: 2, positionY: 3, type: 1, isFinishTile: !1 },
					{ positionX: 5, positionY: 5, type: 1, isFinishTile: !1 },
					{ positionX: 0, positionY: 0, type: 1, isFinishTile: !1 },
				],
				[
					{
						positionX: 8,
						positionY: 0,
						type: 1,
						isFinishTile: !0,
						hint:
							"Click on a different tile to change active color. Use inactive tiles as walls.",
					},
					{ positionX: 6, positionY: 6, type: 1, isFinishTile: !1 },
					{ positionX: 1, positionY: 3, type: 2, isFinishTile: !0 },
					{ positionX: 4, positionY: 7, type: 2, isFinishTile: !1 },
				],
				[
					{
						positionX: 5,
						positionY: 5,
						type: 1,
						isFinishTile: !0,
						hint: "Use grey blocks as walls too.",
					},
					{ positionX: 0, positionY: 0, type: 1, isFinishTile: !1 },
					{ positionX: 4, positionY: 2, type: 2, isFinishTile: !0 },
					{ positionX: 1, positionY: 0, type: 2, isFinishTile: !1 },
					{ positionX: 6, positionY: 6, type: f, isFinishTile: !1 },
					{ positionX: 5, positionY: 3, type: f, isFinishTile: !1 },
				],
				[
					{
						positionX: 8,
						positionY: 3,
						type: 1,
						isFinishTile: !0,
						hint: "Try with even more colors.",
					},
					{ positionX: 2, positionY: 5, type: 1, isFinishTile: !1 },
					{ positionX: 3, positionY: 6, type: 1, isFinishTile: !1 },
					{ positionX: 4, positionY: 4, type: 2, isFinishTile: !0 },
					{ positionX: 1, positionY: 0, type: 2, isFinishTile: !1 },
					{ positionX: 1, positionY: 4, type: 3, isFinishTile: !1 },
					{ positionX: 6, positionY: 8, type: 3, isFinishTile: !0 },
				],
				[
					{
						positionX: 7,
						positionY: 1,
						type: 1,
						isFinishTile: !0,
						hint: "Good luck!",
					},
					{ positionX: 2, positionY: 7, type: 1, isFinishTile: !1 },
					{ positionX: 1, positionY: 7, type: 2, isFinishTile: !0 },
					{ positionX: 8, positionY: 8, type: 2, isFinishTile: !1 },
					{ positionX: 2, positionY: 2, type: 3, isFinishTile: !0 },
					{ positionX: 6, positionY: 6, type: 3, isFinishTile: !1 },
					{ positionX: 5, positionY: 5, type: 4, isFinishTile: !0 },
					{ positionX: 3, positionY: 4, type: 4, isFinishTile: !1 },
					{ positionX: 8, positionY: 0, type: f, isFinishTile: !1 },
				],
			];
			function F() {
				var e =
					arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
				return {
					cells: b(e),
					activeType: 1,
					level: e,
					finishCords: Y(e),
					nonStandardTilesAmount: X(e),
					hint: N(e),
					score: 0,
					singleScore: 0,
					scoreClass: "",
					moves: 0,
					isLevelFinished: !1,
					levelsAmount: E.length,
					isGameFinished: !1,
				};
			}
			function b() {
				var e,
					i =
						arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
					t = [],
					n = E[i],
					s = 0;
				return (
					n.forEach(function (i) {
						(e = Object(c.a)({}, i, {
							uniqueKey: s,
							tileFoundInNextCell: !1,
							actionClass: "",
						})),
							s++,
							t.push(e);
					}),
					t
				);
			}
			function Y() {
				var e =
						arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
					i = [];
				return (
					E[e].forEach(function (e) {
						if (e.isFinishTile) {
							var t = { positionX: e.positionX, positionY: e.positionY };
							i.push(t);
						}
					}),
					i
				);
			}
			function X() {
				var e =
					arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
				return E[e].reduce(function (e, i) {
					return i.isFinishTile || i.type === f ? e + 1 : e;
				}, 0);
			}
			function N() {
				var e =
						arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
					i = "";
				return (
					E[e].forEach(function (e) {
						e.hint && (i = e.hint);
					}),
					i
				);
			}
			function g(e, i) {
				var t,
					n,
					s = i.cells.filter(function (e) {
						return !e.toBeMergedWithFinish;
					}),
					o = (function (e) {
						for (var i, t = [], n = e.length, s = 0; s < y; s++)
							for (var o = (t[s] = []), a = 0; a < d; a++) o.push(null);
						for (var r = 0; r < n; r++)
							t[(i = e[r]).positionX][i.positionY] = i;
						return t;
					})(s),
					a = s.length - i.nonStandardTilesAmount,
					r = 0,
					l = !1,
					c = (function (e) {
						for (var i = { x: [], y: [] }, t = 0; t < y; t++)
							i.x.push(t), i.y.push(t);
						2 === e && (i.x = i.x.reverse());
						3 === e && (i.y = i.y.reverse());
						return i;
					})(e),
					p = (function (e) {
						return {
							1: { x: 0, y: -1 },
							2: { x: 1, y: 0 },
							3: { x: 0, y: 1 },
							4: { x: -1, y: 0 },
						}[e];
					})(e);
				return (
					i.finishCords.forEach(function (e) {
						o[e.positionX][e.positionY].actionClass = "";
					}),
					c.x.forEach(function (e) {
						c.y.forEach(function (s) {
							(t = o[e][s]) &&
								t.type === i.activeType &&
								!t.isFinishTile &&
								((n = (function (e, i, t) {
									var n, s, o, a, r;
									do {
										(n = e),
											(o = e.positionX + t.x),
											(a = e.positionY + t.y),
											(s = L(i, o, a)),
											(r =
												s &&
												((s.isFinishTile && s.type === e.type) ||
													s.toBeMergedWithFinish)),
											(e = {
												positionX: o,
												positionY: a,
												type: e.type,
												isFinishTile: e.isFinishTile,
												uniqueKey: e.uniqueKey,
												actionClass: "",
												nextTile: s,
												toBeMergedWithFinish: r,
											});
									} while (x(e) && !s);
									return (n.nextTile = s), (n.toBeMergedWithFinish = r), n;
								})(t, o, p)).nextTile &&
								((n.nextTile.isFinishTile && n.nextTile.type === t.type) ||
									n.nextTile.toBeMergedWithFinish)
									? (n.nextTile.isFinishTile &&
											n.nextTile.type === t.type &&
											(n.nextTile.actionClass = "merged"),
									  n.toBeMergedWithFinish && (n.actionClass = "removed"),
									  r++,
									  a--,
									  C(o, n, t))
									: (n.positionX === t.positionX &&
											n.positionY === t.positionY) ||
									  C(o, n, t),
								l || (i.moves++, (l = !0)));
						});
					}),
					r
						? (function (e, i) {
								var t = (function e(i) {
									return 0 === i ? 1 : i * e(i - 1);
								})(i);
								console.log(i, t),
									(e.singleScore = t),
									(e.score += t),
									(e.scoreClass = "score-up");
						  })(i, r)
						: (i.scoreClass = ""),
					0 === a &&
						((i.isLevelFinished = !0),
						i.level === i.levelsAmount - 1 && (i.isGameFinished = !0)),
					(function (e) {
						for (var i = [], t = 0; t < y; t++)
							for (var n = 0; n < d; n++) e[t][n] && i.push(e[t][n]);
						return i;
					})(o)
				);
			}
			function C(e, i, t) {
				return (
					(e[i.positionX][i.positionY] = i),
					(e[t.positionX][t.positionY] = null),
					e
				);
			}
			function x(e) {
				return (
					e.positionX >= 0 &&
					e.positionX < y &&
					e.positionY >= 0 &&
					e.positionY < d
				);
			}
			function L(e, i, t) {
				return e[i] && e[i][t] ? e[i][t] : null;
			}
			function k(e, i) {
				return e.type !== f ? e.type : i;
			}
			var w = function () {
					var e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: F(0),
						i = arguments.length > 1 ? arguments[1] : void 0;
					switch (i.type) {
						case p:
							return Object(c.a)({}, e, { cells: g(i.payload, e) });
						case u:
							return Object(c.a)({}, e, {
								activeType: k(i.payload, e.activeType),
							});
						case h:
							return F(e.level);
						case m:
							return F(0);
						case v:
							return F(e.level + 1);
						default:
							return e;
					}
				},
				j = t(3),
				O = t(4),
				R = t(6),
				S = t(5),
				A = t(7),
				G = t(2),
				M = t.n(G),
				B = t(16),
				W = function (e) {
					var i = e.tileClassName,
						t = e.cell,
						o = e.onMouseClick,
						a = Object(n.useState)(),
						r = Object(B.a)(a, 2),
						l = r[0],
						c = r[1];
					return (
						Object(n.useEffect)(
							function () {
								requestAnimationFrame(function () {
									c(i);
								});
							},
							[i]
						),
						s.a.createElement("div", {
							className: l,
							onClick: function () {
								return o(t);
							},
						})
					);
				},
				_ = (function (e) {
					function i() {
						return (
							Object(j.a)(this, i),
							Object(R.a)(this, Object(S.a)(i).apply(this, arguments))
						);
					}
					return (
						Object(A.a)(i, e),
						Object(O.a)(i, [
							{
								key: "render",
								value: function () {
									return s.a.createElement("div", { className: "block" });
								},
							},
						]),
						i
					);
				})(s.a.Component),
				q = (function (e) {
					function i() {
						return (
							Object(j.a)(this, i),
							Object(R.a)(this, Object(S.a)(i).apply(this, arguments))
						);
					}
					return (
						Object(A.a)(i, e),
						Object(O.a)(i, [
							{
								key: "render",
								value: function () {
									var e,
										i,
										t = "",
										n = [];
									for (e = 0; e < y; e++)
										for (i = 0; i < d; i++)
											(t = e + " " + i),
												n.push(s.a.createElement(_, { key: t }));
									return s.a.createElement("div", { className: "grid" }, n);
								},
							},
						]),
						i
					);
				})(s.a.Component),
				K = Object(l.b)(function (e) {
					return {
						cells: e.cells,
						finishCords: e.finishCords,
						activeType: e.activeType,
					};
				})(function (e) {
					var i = e.cells,
						t = e.finishCords[e.activeType - 1],
						n = M()("game", T[e.activeType]),
						o = [];
					return (
						i.forEach(function (i, n) {
							var a = "tile-type-" + T[i.type],
								r = "tile-position-" + i.positionX + "-" + i.positionY,
								l = "tile-position-" + t.positionX + "-" + t.positionY,
								c = "tile-action-" + i.actionClass,
								p = e.activeType === i.type,
								u = i.isFinishTile,
								h = M()(
									"tile",
									a,
									{ "tile-type-finish": u },
									i.toBeMergedWithFinish ? l : r,
									c,
									{ "tile-active": p }
								),
								m = s.a.createElement(W, {
									tileClassName: h,
									cell: i,
									onMouseClick: e.onMouseClick,
									key: i.uniqueKey.toString(),
								});
							o.push(m);
						}),
						s.a.createElement(
							"div",
							{ className: n },
							s.a.createElement(q, null),
							s.a.createElement("div", { className: "board" }, o)
						)
					);
				}),
				D = Object(l.b)(function (e) {
					return {
						score: e.score,
						singleScore: e.singleScore,
						level: e.level,
						moves: e.moves,
						activeType: e.activeType,
						scoreClass: e.scoreClass,
					};
				})(function (e) {
					var i = e.score,
						t = e.singleScore,
						n = e.level,
						o = e.moves,
						a = e.activeType,
						r = e.scoreClass,
						l = M()("logo", "logo-" + T[a]),
						c = M()("single-score", r),
						p = "+" + t,
						u = n + 1;
					return s.a.createElement(
						"div",
						{ className: "header" },
						s.a.createElement("h1", { className: l }, "Swipers"),
						s.a.createElement(
							"div",
							{ className: "score-wrapper" },
							s.a.createElement(
								"div",
								{ className: "score-unit" },
								s.a.createElement(
									"p",
									{ className: "score-subheader score" },
									"Level"
								),
								s.a.createElement("p", { className: "score" }, u)
							),
							s.a.createElement(
								"div",
								{ className: "score-unit" },
								s.a.createElement(
									"p",
									{ className: "score-subheader score" },
									"Moves"
								),
								s.a.createElement("p", { className: "score" }, o)
							),
							s.a.createElement(
								"div",
								{ className: "score-unit" },
								s.a.createElement(
									"p",
									{ className: "score-subheader score" },
									"Score"
								),
								s.a.createElement("p", { className: "score" }, i),
								s.a.createElement("span", { className: c }, p)
							),
							s.a.createElement(
								"div",
								{ className: "score-unit" },
								s.a.createElement(
									"p",
									{ className: "score-subheader score" },
									"Best"
								),
								s.a.createElement("p", { className: "score" }, i)
							)
						)
					);
				}),
				U = Object(l.b)(function (e) {
					return {
						isLevelFinished: e.isLevelFinished,
						isGameFinished: e.isGameFinished,
						moves: e.moves,
					};
				})(function (e) {
					var i = e.isLevelFinished,
						t = e.isGameFinished,
						n = e.moves,
						o = e.onLevelRestart,
						a = e.onGameRestart,
						r = e.onNextLevel,
						l = M()("info-overlay", { visible: i }),
						c = M()("info-overlay-wrapper", { visible: i });
					return s.a.createElement(
						"div",
						null,
						s.a.createElement("div", { className: c }),
						s.a.createElement(
							"div",
							{ className: l },
							s.a.createElement(
								"h1",
								{ className: "title" },
								"Congratulations!"
							),
							s.a.createElement(
								"div",
								{ className: "text" },
								t
									? s.a.createElement("p", null, "You finished the game :D")
									: s.a.createElement(
											"p",
											null,
											"Level completed in just ",
											n,
											" ",
											n > 1 ? "moves" : "move",
											" :)"
									  )
							),
							s.a.createElement(
								"div",
								null,
								s.a.createElement(
									"button",
									{ className: "button restart", onClick: o },
									"Restart level"
								),
								t
									? s.a.createElement(
											"button",
											{ className: "button next", onClick: a },
											"Restart game"
									  )
									: s.a.createElement(
											"button",
											{ className: "button next", onClick: r },
											"Next level"
									  )
							)
						)
					);
				}),
				P = Object(l.b)(function (e) {
					return { hint: e.hint };
				})(function (e) {
					var i = e.hint,
						t = e.onLevelRestart,
						n = e.onGameRestart;
					return s.a.createElement(
						"div",
						{ className: "hint" },
						s.a.createElement("p", null, i),
						s.a.createElement(
							"div",
							{ className: "buttons" },
							s.a.createElement(
								"button",
								{ className: "button restart", onClick: n },
								"Restart game"
							),
							s.a.createElement(
								"button",
								{ className: "button next", onClick: t },
								"Restart level"
							)
						)
					);
				});
			var I = (function (e) {
					function i() {
						var e, t;
						Object(j.a)(this, i);
						for (var n = arguments.length, s = new Array(n), o = 0; o < n; o++)
							s[o] = arguments[o];
						return (
							((t = Object(R.a)(
								this,
								(e = Object(S.a)(i)).call.apply(e, [this].concat(s))
							)).handleKeyPress = function (e) {
								var i = {
									ArrowUp: 1,
									ArrowRight: 2,
									ArrowDown: 3,
									ArrowLeft: 4,
									w: 1,
									d: 2,
									s: 3,
									a: 4,
								};
								i[e.key] && t.props.updateCells(i[e.key]);
							}),
							(t.handleMouseClick = function (e) {
								t.props.setActiveType(e);
							}),
							(t.handleRestartLevel = function () {
								t.props.restartLevel();
							}),
							(t.handleRestartGame = function () {
								t.props.restartGame();
							}),
							(t.handleSetNextLevel = function () {
								t.props.setNextLevel();
							}),
							t
						);
					}
					return (
						Object(A.a)(i, e),
						Object(O.a)(i, [
							{
								key: "componentDidMount",
								value: function () {
									var e = this;
									document.addEventListener("keydown", function (i) {
										e.handleKeyPress(i);
									});
								},
							},
							{
								key: "render",
								value: function () {
									return n.createElement(
										"div",
										{ className: "app" },
										n.createElement(D, null),
										n.createElement(K, { onMouseClick: this.handleMouseClick }),
										n.createElement(P, {
											onLevelRestart: this.handleRestartLevel,
											onGameRestart: this.handleRestartGame,
										}),
										n.createElement(U, {
											onLevelRestart: this.handleRestartLevel,
											onGameRestart: this.handleRestartGame,
											onNextLevel: this.handleSetNextLevel,
										})
									);
								},
							},
						]),
						i
					);
				})(n.Component),
				V = Object(l.b)(null, function (e) {
					return {
						updateCells: function (i) {
							return e(
								(function (e) {
									return { type: p, payload: e };
								})(i)
							);
						},
						setActiveType: function (i) {
							return e({ type: u, payload: i });
						},
						restartLevel: function () {
							return e({ type: h });
						},
						restartGame: function () {
							return e({ type: m });
						},
						setNextLevel: function () {
							return e({ type: v });
						},
					};
				})(I),
				J = Object(r.b)(w);
			var $ = function () {
				return s.a.createElement(
					"div",
					null,
					s.a.createElement(l.a, { store: J }, s.a.createElement(V, null))
				);
			};
			Boolean(
				"localhost" === window.location.hostname ||
					"[::1]" === window.location.hostname ||
					window.location.hostname.match(
						/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
					)
			);
			a.a.render(s.a.createElement($, null), document.getElementById("root")),
				"serviceWorker" in navigator &&
					navigator.serviceWorker.ready.then(function (e) {
						e.unregister();
					});
		},
	},
	[[17, 1, 2]],
]);
//# sourceMappingURL=main.235e54c4.chunk.js.map

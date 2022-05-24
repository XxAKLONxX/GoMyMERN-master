const express = require("express");
const { addTicket, getTicket } = require("../controllers/ticket");

const router = express.Router();

router.post("/ClientTicket",addTicket);
router.get("/TicketList",getTicket)
router.get("/currentTicket", (req, res) => {
  res.send(req.ticket);
})

// router.get("/Ticketliste", async (req, res) => {
//   try {
//     const Tickets = await Ticket.find();
//     return res.status(200).send({ msg: "liste", Tickets });
//   } catch (error) {
//     res.status(400).send({ msg: "error", error });
//   }
// });

// router.delete("/deleteTicket/:id", async (req, res) => {
//   try {
//     const foundTicket = await Ticket.findById(req.params.id);

//     if (!foundTicket) {
//       return res.status(400).send({ errors: [{ msg: "delete failed" }] });
//     }
//     await foundTicket.remove();
//     return res.status(200).send({ msg: "delete done ", Ticket: true });
//   } catch (error) {
//     return res.status(400).send({ msg: "error delete " });
//   }
// });

// router.patch("/editTicket/:id", async (req, res) => {
//   try {
//     const foundTicket = await Ticket.findById(req.params.id);

//     if (!foundTicket) {
//       return res.status(400).send({ errors: [{ msg: "edit failed" }] });
//     }
//     Object.assign(foundTicket, req.body);
//     await foundTicket.save();
//     return res.status(200).send({ msg: "edit done ", Ticket: foundTicket });
//   } catch (error) {
//     return res.status(400).send({ msg: "error edit " });
//   }
// });

module.exports = router;

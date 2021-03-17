var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Career = /** @class */ (function () {
    function Career(field) {
        this.field = field;
    }
    Career.prototype.areaOfStudy = function () {
        console.log("Are you interested in going into " + this.field + "?");
    };
    return Career;
}());
var Course = /** @class */ (function (_super) {
    __extends(Course, _super);
    //can pass days in constructor
    function Course(field, topic, days) {
        var _this = _super.call(this, field) || this;
        _super.prototype.areaOfStudy.call(_this);
        _this.topic = topic;
        _this.days = days;
        return _this;
    }
    Object.defineProperty(Course.prototype, "classLength", {
        get: function () {
            return this.days;
        },
        set: function (days) {
            this.days = days;
        },
        enumerable: false,
        configurable: true
    });
    Course.preReq = function () {
        return "You must know HTML first.";
    };
    return Course;
}(Career));
// Instantiate an object from a class
//let career = new Career("Web Development");
var course = new Course("Web Development", "Angular", 3);
//course.areaOfStudy();
course.classLength = 4;
var days = course.classLength;
var prereq = Course.preReq();
console.log("You are in a " + days + "-day " + course.topic + " class. " + prereq);
